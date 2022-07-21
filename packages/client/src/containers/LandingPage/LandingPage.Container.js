import React, { useState, useEffect, useMemo, useCallback } from 'react';
import getApiBaseUrl from '../../utils/getApiBaseURL';
import { FilteringArea } from '../../components/FilteringArea/FilteringArea';
import './LandingPage.Style.css';
import { ToolsGrid } from '../../components/ToolsGrid/ToolsGrid.component';
import { ToolsContext } from './Context';

export const LandingPage = () => {
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

  // fetching specific tools
  function getFilteredTools(newKey) {
    setIsLoading(true);
    const promise = fetch(newKey).then((response) => response.json());
    return promise;
  }

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

  const value = useMemo(
    () => ({
      tools,
      isLoading,
      addQueryParam,
      removeQueryParam,
      getAllTools,
    }),
    [tools, isLoading, addQueryParam, removeQueryParam, getAllTools],
  );

  return (
    <div className="landing-page-container">
      <ToolsContext.Provider value={value}>
        <FilteringArea />
        <ToolsGrid />
      </ToolsContext.Provider>
    </div>
  );
};
