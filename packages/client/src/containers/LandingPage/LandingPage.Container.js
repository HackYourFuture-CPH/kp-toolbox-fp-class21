import React from 'react';
import { FilteringArea } from '../../components/FilteringArea/FilteringArea';
import './LandingPage.Style.css';
import { ToolsGrid } from '../../components/ToolsGrid/ToolsGrid.component';
import { ContextProvider } from './Context';

export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <span>Landing Page</span>
      <ContextProvider>
        <FilteringArea />
        <ToolsGrid />
      </ContextProvider>
    </div>
  );
};
