import React, { createContext, useState, useEffect, useMemo } from 'react';
import getApiBaseUrl from '../../utils/getApiBaseURL';

// import useSWR from 'swr';

export const ToolsContext = createContext([]);

// const fetcher = (url) => fetch(url).then((result) => result.json());

// eslint-disable-next-line react/prop-types
export function ContextProvider({ children }) {
  //   const { data, error } = useSWR('/api/meals', fetcher);
  //   if (error) return 'An error has occurred.';
  //   if (!data) return 'Loading...';
  const [tools, setTools] = useState([]);

  function getTools() {
    const promise = fetch(`${getApiBaseUrl()}/api/tools`).then((response) =>
      response.json(),
    );

    return promise;
  }

  //   function getToolsByCategory(id) {
  //     const promise = fetch(
  //       `${getApiBaseUrl()}/api/tools?${fetchKey}[]=${id}`,
  //     ).then((response) => response.json());

  //     return promise;
  //   }

  useEffect(() => {
    getTools().then((data) => {
      setTools(data);
    });
  }, []);
  const value = useMemo(
    () => ({
      tools,
    }),
    [tools],
  );
  return (
    <ToolsContext.Provider value={value}>{children}</ToolsContext.Provider>
  );
}
