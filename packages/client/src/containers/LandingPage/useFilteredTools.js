import { useState, useCallback, useEffect, useMemo } from 'react';
import getApiBaseUrl from '../../utils/getApiBaseURL';

export function useFilteredTools() {
  const [tools, setTools] = useState([]);
  const [baseUrl, setBaseUrl] = useState(`${getApiBaseUrl()}/api/tools`);
  const [isLoading, setIsLoading] = useState(true);

  // fetching all tools
  const getAllTools = useCallback(() => {
    function fetchAllTools() {
      setIsLoading(true);
      setBaseUrl(`${getApiBaseUrl()}/api/tools`);
      const promise = fetch(baseUrl).then((response) => response.json());
      return promise;
    }
    fetchAllTools().then((data) => {
      setIsLoading(false);
      setTools(data);
    });
  }, [baseUrl]);

  // Modifying a query string, by adding a new query param. Triggers by pressing on a checkbox
  const addQueryParam = useCallback(
    (e, fetchKey) => {
      const url = `${fetchKey}[]=${e.target.value}`;
      // Check if it gonna be a first query param
      const isIncludes = baseUrl.includes('?');
      if (!isIncludes) {
        setBaseUrl((prevUrl) => prevUrl.concat(`?${url}`));
      } else {
        setBaseUrl((prevUrl) => prevUrl.concat(`&${url}`));
      }
    },
    [baseUrl],
  );

  // Modifying a query string, by deleting an already existing query param. Triggers by pressing on the same checkbox on a second time
  const removeQueryParam = useCallback(
    (e, fetchKey) => {
      const url = `${fetchKey}[]=${e.target.value}`;

      // All possible query params
      const queryParams = {
        queryParamBeginWithQuestionMark: `?${url}`,
        queryParamBeginWithAmpersand: `&${url}`,
        queryParamEndWithAmpersand: `${url}&`,
      };

      function checkIfBaseUrlAlreadyIncludeQueryParamToDelete(queries) {
        for (const key in queryParams) {
          if (Object.hasOwnProperty.call(queryParams, key)) {
            const element = queryParams[key];
            const isInclude = baseUrl.includes(element);
            if (isInclude) {
              const newBaseUrl = baseUrl.replace(element, '');
              setBaseUrl(newBaseUrl);
            }
          }
        }
      }

      checkIfBaseUrlAlreadyIncludeQueryParamToDelete(queryParams);
    },
    [baseUrl],
  );

  // fetching specific tools
  function getFilteredTools(newKey) {
    // eslint-disable-next-line no-console
    console.log(newKey, newKey);

    setIsLoading(true);
    const promise = fetch(newKey).then((response) => response.json());
    return promise;
  }

  useEffect(() => {
    getFilteredTools(baseUrl).then((data) => {
      const newTools = data.filter(
        (value, index, self) =>
          index ===
          self.findIndex(
            (t) => t.place === value.place && t.name === value.name,
          ),
      );
      setIsLoading(false);
      setTools(newTools);
    });
  }, [baseUrl]);

  return useMemo(
    () => ({
      tools: { tools, isLoading },
      filterActions: { getAllTools, addQueryParam, removeQueryParam },
    }),
    [addQueryParam, getAllTools, isLoading, removeQueryParam, tools],
  );
}
