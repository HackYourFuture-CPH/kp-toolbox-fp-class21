/* eslint-disable */
import React, { useState, useEffect, useMemo } from 'react';
import getApiBaseUrl from '../../utils/getApiBaseURL';
import { FilteringArea } from '../../components/FilteringArea/FilteringArea';
import './LandingPage.Style.css';
import { ToolsGrid } from '../../components/ToolsGrid/ToolsGrid.component';
import { ToolsContext } from './Context';

export const LandingPage = () => {
  const [tools, setTools] = useState([]);
  const [baseUrl, setBaseUrl] = useState(`${getApiBaseUrl()}/api/tools`);

  function getAllTools() {
    const promise = fetch(baseUrl).then((response) => response.json());

    return promise;
  }

  function onShowAllButtonClick() {
    getAllTools().then((data) => {
      setTools(data);
    });
  }

  function getFilteredTools(newKey) {
    console.log('newKey', newKey);
    const promise = fetch(newKey).then((response) => response.json());

    return promise;
  }
  const onCheckboxClick = (e, fetchKey) => {
    setTools([]);
    const url = `${fetchKey}[]=${e.target.value}`;
    const isIncludes = baseUrl.includes('?');
    if (!isIncludes) {
      setBaseUrl((prevUrl) => prevUrl.concat(`?${url}`));
    } else {
      setBaseUrl((prevUrl) => prevUrl.concat(`&${url}`));
    }
  };

  useEffect(() => {
    getFilteredTools(baseUrl).then((tools) => {
      console.log('tools', tools);

      const newTools = tools.filter(
        (value, index, self) =>
          index ===
          self.findIndex(
            (t) => t.place === value.place && t.name === value.name,
          ),
      );
      console.log('newTools', newTools);
      setTools(newTools);
    });
  }, [baseUrl]);

  console.log('baseUrl', baseUrl);

  useEffect(() => {
    getAllTools().then((data) => {
      setTools(data);
    });
  }, []);

  const value = useMemo(
    () => ({
      tools,
      onCheckboxClick,
      onShowAllButtonClick,
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
    </div>
  );
};
