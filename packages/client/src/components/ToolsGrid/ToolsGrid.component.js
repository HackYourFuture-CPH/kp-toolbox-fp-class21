import React, { useState, useEffect, useMemo } from 'react';
import './ToolsGrid.style.css';
import getApiBaseUrl from '../../utils/getApiBaseURL';
import { ToolItem } from '../ToolItem/ToolItem.component';
import { Sorting } from '../Sorting/Sorting.component';

export const ToolsGrid = () => {
  const [tools, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState('');

  function getTools() {
    const promise = fetch(`${getApiBaseUrl()}/api/tools`).then((response) =>
      response.json(),
    );
    return promise;
  }
  useEffect(() => {
    setIsLoading(true);
    getTools().then((response) => {
      setResult(response);
      setIsLoading(false);
    });
  }, []);

  const sortedTools = useMemo(() => {
    let result = tools;
    if (selected === 'a-z') {
      result = result.sort((a, b) => {
        const titleA = a.name.toUpperCase();
        const titleB = b.name.toUpperCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
    } else if (selected === 'date') {
      result = result.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateB - dateA;
      });
    }
    return result;
  }, [tools, selected]);

  const toolsToRender = isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      {sortedTools.map((tool, i) => {
        return <ToolItem index={i} key={tool.id} tool={tool} />;
      })}
    </>
  );

  return (
    <div>
      <Sorting setSelected={setSelected} />
      <div className="grid-tools-container">{toolsToRender}</div>
    </div>
  );
};
