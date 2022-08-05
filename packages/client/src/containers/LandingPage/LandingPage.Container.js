import React from 'react';
import { WelcomeBox } from '../../components/WelcomeBox/WelcomeBox';
import { FilteringArea } from '../../components/FilteringArea/FilteringArea';
import './LandingPage.Style.css';
import { ToolsGrid } from '../../components/ToolsGrid/ToolsGrid.component';

export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <span>Landing Page</span>
      <WelcomeBox />
      <FilteringArea />
      <ToolsGrid />
    </div>
  );
};
