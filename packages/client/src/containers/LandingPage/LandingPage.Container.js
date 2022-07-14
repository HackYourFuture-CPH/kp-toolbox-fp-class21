/* eslint-disable */
import React, { useState, useEffect, useMemo } from 'react';
import getApiBaseUrl from '../../utils/getApiBaseURL';
import { FilteringArea } from '../../components/FilteringArea/FilteringArea';
import './LandingPage.Style.css';
import { ToolsGrid } from '../../components/ToolsGrid/ToolsGrid.component';
import { ToolsContext } from './Context';

export const LandingPage = () => {
  const [tools, setTools] = useState([]);

  function getTools() {
    const promise = fetch(`${getApiBaseUrl()}/api/tools`).then((response) =>
      response.json(),
    );
    // console.log('getTools', response);

    return promise;
  }

  function getFilteredTools(id, fetchKey) {
    const promise = fetch(
      `${getApiBaseUrl()}/api/tools?${fetchKey}[]=${id}`,
    ).then((response) => response.json());
    console.log('fetchKey', fetchKey);
    // console.log('getFilteredTools', response);

    return promise;
  }
  const onCheckboxClick = (e, fetchKey) => {
    getFilteredTools(e.target.value, fetchKey).then((response) => {
      console.log('getFilteredTools', response);
      setTools(response);
    });
  };

  useEffect(() => {
    getTools().then((data) => {
      setTools(data);
    });
  }, []);

  const value = useMemo(
    () => ({
      tools,
      onCheckboxClick,
    }),
    [tools],
  );

  return (
    <div className="landing-page-container">
      <span>Landing Page</span>
      <ToolsContext.Provider value={value}>
        <FilteringArea />
        <ToolsGrid />
      </ToolsContext.Provider>
      {/* <ContextProvider></ContextProvider> */}
    </div>
  );
};
