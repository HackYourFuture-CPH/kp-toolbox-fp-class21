import React from 'react';
import { FilteringArea } from '../../components/FilteringArea/FilteringArea';
import './LandingPage.Style.css';

export const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <FilteringArea />
      <span>Landing Page</span>
    </div>
  );
};
