/* eslint-disable */
import React, { useState, useEffect, useContext } from 'react';
import './ToolsGrid.style.css';
// import getApiBaseUrl from '../../utils/getApiBaseURL';
import { ToolItem } from '../ToolItem/ToolItem.component';
import { ToolsContext } from '../../containers/LandingPage/Context';

export const ToolsGrid = () => {
  const { tools } = useContext(ToolsContext);
  console.log('tools', tools);
  const [newTools, setNewTools] = useState(tools);
  const [isLoading, setIsLoading] = useState(true);

  // function getTools() {
  //   const promise = fetch(`${getApiBaseUrl()}/api/tools`).then((response) =>
  //     response.json(),
  //   );

  //   return promise;
  // }
  // useEffect(() => {
  //   setIsLoading(true);
  //   getTools().then((response) => {
  //     setResult(response);
  //     setIsLoading(false);
  //   });
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    setNewTools(newTools);
    setIsLoading(false);
  }, [newTools]);

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
