import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import './ToolsGrid.style.css';
import { ToolItem } from '../ToolItem/ToolItem.component';
import { Sorting } from '../Sorting/Sorting.component';
import { Loader } from '../Loader/Loader.component';

export const ToolsGrid = ({ searchBarText, tools, isLoading }) => {
  const [selected, setSelected] = useState('');
  const sortedTools = useMemo(() => {
    let result = tools;
    if (searchBarText) {
      result = result.filter((tooltomap) =>
        tooltomap.name.toLowerCase().includes(searchBarText.toLowerCase()),
      );
      return result;
    }
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
  }, [tools, selected, searchBarText]);

  const toolsToRender = isLoading ? (
    <div className="LoadingMessage">
      <span>Loading tool...</span>
      <Loader />
    </div>
  ) : (
    <div className="grid-tools-container">
      {sortedTools.map((tool, i) => {
        return <ToolItem index={i} key={tool.id} tool={tool} />;
      })}
    </div>
  );

  return (
    <div>
      <Sorting setSelected={setSelected} />
      <div>{toolsToRender}</div>
    </div>
  );
};

ToolsGrid.defaultProps = {
  searchBarText: null,
};

ToolsGrid.propTypes = {
  searchBarText: PropTypes.string,
  tools: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isLoading: PropTypes.bool.isRequired,
};
