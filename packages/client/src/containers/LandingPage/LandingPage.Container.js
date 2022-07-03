import React from 'react';
import './LandingPage.Style.css';
import ToolsList from '../../components/Hooks/ToolsList.component';

export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <span>Landing Page</span>
      <ToolsList />
    </div>
  );
};
