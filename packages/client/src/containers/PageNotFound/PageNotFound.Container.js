import React from 'react';
import './PageNotFound.Style.css';
import { ToolDetailsPage } from '../../components/ToolDetailsPage/ToolDetailsPage.component';

export const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <span>Page Not Found</span>
      <ToolDetailsPage/>
    </div>
  );
};
