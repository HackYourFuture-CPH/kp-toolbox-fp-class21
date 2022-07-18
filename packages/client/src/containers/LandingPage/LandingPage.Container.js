/* eslint-disable */
import React, { useState, useEffect, useMemo } from 'react';
import getApiBaseUrl from '../../utils/getApiBaseURL';
import { FilteringArea } from '../../components/FilteringArea/FilteringArea';
import './LandingPage.Style.css';
import { ToolsGrid } from '../../components/ToolsGrid/ToolsGrid.component';
import { ToolsContext } from './Context';

const baseUrl = `${getApiBaseUrl()}/api/tools`;

localStorage.setItem('searchKey', baseUrl);

export const LandingPage = () => {
  const [tools, setTools] = useState([]);
  // const [baseUrl, setBaseUrl] = useState(`${getApiBaseUrl()}/api/tools`);

  let key = '';
  console.log('key', key);

  function getAllTools() {
    const promise = fetch(baseUrl).then((response) => response.json());
    // console.log('getAllTools', response);

    return promise;
  }

  function onShowAllButtonClick() {
    localStorage.setItem('searchKey', baseUrl);
    getAllTools().then((data) => {
      setTools(data);
    });
  }

  function getFilteredTools(newKey) {
    console.log('newKey', newKey);
    const promise = fetch(newKey).then((response) => response.json());
    // console.log('getFilteredTools', response);

    return promise;
  }
  const onCheckboxClick = (e, fetchKey) => {
    const url = `${fetchKey}[]=${e.target.value}`;
    const localStorageKey = localStorage.getItem('searchKey');
    console.log('localStorageKey ', localStorageKey);
    const isIncludes = localStorageKey.includes('?');
    if (!isIncludes) {
      const key = `${localStorageKey}?${url}`;
      localStorage.setItem('searchKey', key);
    } else {
      const key = `${localStorageKey}&${url}`;
      localStorage.setItem('searchKey', key);
    }
    const searchKey = localStorage.getItem('searchKey');
    getFilteredTools(searchKey).then((response) => {
      console.log('searchKey', searchKey);

      console.log('getFilteredTools', response);
      setTools(response);
    });
  };

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
