import React, { useState, useContext, useMemo } from 'react';
import './ToolsGrid.style.css';
import { ToolItem } from '../ToolItem/ToolItem.component';
import { Sorting } from '../Sorting/Sorting.component';
import { ToolsContext } from '../../containers/LandingPage/Context';

export const ToolsGrid = () => {
  const { tools, isLoading } = useContext(ToolsContext);
  const [selected, setSelected] = useState('');

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
      <Sorting setSelected={setSelected} />
      <div className="grid-tools-container">{toolsToRender}</div>
    </div>
  );
};
