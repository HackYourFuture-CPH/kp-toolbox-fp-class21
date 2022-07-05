import React from 'react';
import './ToolsGrid.style.css';
import { ToolsItem } from '../ToolItem/ToolsItem.component';

export const ToolsGrid = () => {
  return (
    <div className="grid-tools-container">
      <ToolsItem />
      <ToolsItem />
      <ToolsItem />
      <ToolsItem />
    </div>
  );
};
