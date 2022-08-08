import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { FilteringArea } from '../../components/FilteringArea/FilteringArea';
import './LandingPage.Style.css';
import { ToolsGrid } from '../../components/ToolsGrid/ToolsGrid.component';

export const LandingPage = () => {
  const [searchBarText, setSearchBarText] = useState('');

  const filterByToolName = (value) => {
    setSearchBarText(value);
  };
  return (
    <div className="landing-page-container">
      <span>Landing Page</span>
      <SearchBar filterByToolNameAction={filterByToolName} />
      <FilteringArea />
      <ToolsGrid searchBarText={searchBarText} />
    </div>
  );
};
