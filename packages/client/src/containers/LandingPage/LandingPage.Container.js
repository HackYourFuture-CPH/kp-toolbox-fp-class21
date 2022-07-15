import React from 'react';
import { FilteringArea } from '../../components/FilteringArea/FilteringArea';
import './LandingPage.Style.css';
import { ToolsGrid } from '../../components/ToolsGrid/ToolsGrid.component';
import { Sorting } from '../../components/GridsSorting/Sorting.component'

export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <span>Landing Page</span>
      <FilteringArea />
      <Sorting />
      <ToolsGrid />
    </div>
  );
};
