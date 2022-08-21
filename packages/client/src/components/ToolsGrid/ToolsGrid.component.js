import React, { useState, useMemo } from 'react';
import PropTypes, { func } from 'prop-types';
import './ToolsGrid.style.css';
import { ToolItem } from '../ToolItem/ToolItem.component';
import { Sorting } from '../Sorting/Sorting.component';
import { Loader } from '../Loader/Loader.component';

export const ToolsGrid = ({
  searchBarText,
  tools,
  isLoading,
  setSearchResultNull,
}) => {
  const [selected, setSelected] = useState('');
  const sortedTools = useMemo(() => {
    let result = tools;
    if (searchBarText) {
      result = result.filter((tooltomap) =>
        tooltomap.name.toLowerCase().includes(searchBarText.toLowerCase()),
      );
      if (result.length === 0) {
        setSearchResultNull(true);
      } else {
        setSearchResultNull(false);
      }
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
  }, [tools, selected, searchBarText, setSearchResultNull]);

  let toolsToRender;

  if (isLoading) {
    toolsToRender = (
      <div className="LoadingMessage">
        <span>Loading tool...</span>
        <Loader />
      </div>
    );
  } else if (isLoading === false && sortedTools.length !== 0) {
    setSearchResultNull(false);
    toolsToRender = (
      <div className="grid-tools-container">
        {sortedTools.map((tool, i) => {
          return <ToolItem index={i} key={tool.id} tool={tool} />;
        })}
      </div>
    );
  } else {
    toolsToRender = (
      <div className="no-tools-message">
        <p>
          No tools has been found.
          <br /> Please try another filtering option(s) or/and different
          keywords
        </p>
      </div>
    );
  }

  return (
    <div>
      {sortedTools.length !== 0 ? <Sorting setSelected={setSelected} /> : null}
      <div>{toolsToRender}</div>
    </div>
  );
};

ToolsGrid.defaultProps = {
  searchBarText: null,
  setSearchResultNull: func,
};

ToolsGrid.propTypes = {
  searchBarText: PropTypes.string,
  tools: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isLoading: PropTypes.bool.isRequired,
  setSearchResultNull: PropTypes.func,
};
