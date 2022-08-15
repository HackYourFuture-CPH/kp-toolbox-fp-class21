import { useState, useCallback, useEffect, useMemo } from 'react';
import getApiBaseUrl from '../../utils/getApiBaseURL';

export function useFilteredTools() {
  const [tools, setTools] = useState([]);
  const [queryString, setQueryString] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: [],
    timeframe: [],
    participantsNumber: [],
  });

  useEffect(() => {
    if (
      filters.category === 0 &&
      filters.participantsNumber === 0 &&
      filters.timeframe === 0
    ) {
      setQueryString('');
      return;
    }

    const category = filters.category
      .map((option) => `category[]=${option}`)
      .join('&');
    const participantsNumber = filters.participantsNumber
      .map((option) => `participantsNumber[]=${option}`)
      .join('&');
    const timeframe = filters.timeframe
      .map((option) => `timeframe[]=${option}`)
      .join('&');

    const newQueryString = [category, participantsNumber, timeframe]
      .filter((option) => option !== '')
      .join('&');
    setQueryString(`?${newQueryString}`);
  }, [filters]);

  const clearFilters = useCallback(
    (fetchKey) => {
      setFilters({
        ...filters,
        [fetchKey]: [],
      });
    },
    [filters],
  );

  const addFilter = useCallback(
    (optionID, fetchKey) => {
      setFilters({
        ...filters,
        [fetchKey]: filters[fetchKey].concat([optionID]),
      });
    },
    [filters],
  );

  const removeFilter = useCallback(
    (optionID, fetchKey) => {
      setFilters({
        ...filters,
        [fetchKey]: filters[fetchKey].filter((filter) => filter !== optionID),
      });
    },
    [filters],
  );

  useEffect(() => {
    setIsLoading(true);
    fetch(`${getApiBaseUrl()}/api/tools${queryString}`)
      .then((response) => response.json())
      .then((data) => {
        // This operation of removing off duplicates of tools can be performed on the server side
        const removeDuplicates = (value, index, self) =>
          index ===
          self.findIndex(
            (t) => t.place === value.place && t.name === value.name,
          );
        const newTools = data.filter(removeDuplicates);
        setIsLoading(false);
        setTools(newTools);
      });
  }, [queryString]);

  return useMemo(
    () => ({
      tools: { tools, isLoading },
      filters,
      filterActions: {
        addFilter,
        removeFilter,
        clearFilters,
      },
    }),
    [addFilter, filters, isLoading, removeFilter, clearFilters, tools],
  );
}
