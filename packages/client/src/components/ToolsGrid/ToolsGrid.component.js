import React, { useState, useEffect } from 'react';
import { getTools } from '../api';
import './ToolsGrid.style.css';
import { ToolsItem } from '../ToolItem/ToolsItem.component';

export const ToolsGrid = () => {
  const [tools, setResult] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
        <ToolsItem
          index={i}
          key={tool.id}
          title={tool.name}
          timeFrame={tool.time_frame}
          groupSize={tool.group_size}
          description={tool.descriprion}
        />
      );
    })
  );

  return <div className="grid-tools-container">{toolsToRender}</div>;
};
