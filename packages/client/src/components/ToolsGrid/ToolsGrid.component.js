import React, { useState, useEffect } from 'react';
import './ToolsGrid.style.css';
import getApiBaseUrl from '../../utils/getApiBaseURL';
import { ToolItem } from '../ToolItem/ToolItem.component';

export const ToolsGrid = () => {
  const [tools, setResult] = useState();
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

  function changeOnSelect(event) {
    if (event.target.value === 'a-z') {
      setSelected(event.target.value);
      tools.sort((a, b) => {
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
    } else if (event.target.value === 'date') {
      setSelected(event.target.value);
      tools.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateB - dateA;
      });
    }
  }

  const selectToRender = isLoading ? (
    ''
  ) : (
    <select value={selected} onChange={changeOnSelect}>
      <option value="">SORT BY</option>
      <option value="a-z">A-Z</option>
      <option value="date">RECENTLY ADDED</option>
    </select>
  );

  const toolsToRender = isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      {tools.map((tool, i) => {
        return (
          <ToolItem
            index={i}
            key={tool.id}
            title={tool.name}
            picture={tool.picture}
            timeFrameMin={tool.time_frame_min}
            timeFrameMax={tool.time_frame_max}
            groupSizeMin={tool.group_size_min}
            groupSizeMax={tool.group_size_max}
            pitch={tool.pitch}
          />
        );
      })}
    </>
  );

  return (
    <div>
      {selectToRender}
      <div className="grid-tools-container">{toolsToRender}</div>
    </div>
  );
};
