import React, { useState, useEffect } from 'react';
import './ToolsGrid.style.css';
import getApiBaseUrl from '../../utils/getApiBaseURL';
import { ToolItem } from '../ToolItem/ToolItem.component';

export const ToolsGrid = () => {
  const [tools, setResult] = useState();
  const [isLoading, setIsLoading] = useState(true);

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

  const toolsToRender = isLoading ? (
    <p>Loading...</p>
  ) : (
    tools.map((tool, i) => {
      return (
        <ToolItem
          index={i}
          key={tool.id}
          title={tool.name}
          timeFrameMin={tool.time_frame_min}
          timeFrameMax={tool.time_frame_max}
          groupSizeMin={tool.group_size_min}
          groupSizeMax={tool.group_size_max}
          pitch={tool.pitch}
        />
      );
    })
  );

  return <div className="grid-tools-container">{toolsToRender}</div>;
};
