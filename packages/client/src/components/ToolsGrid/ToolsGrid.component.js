import React from 'react';
import './ToolsGrid.style.css';
import { ToolItem } from '../ToolItem/ToolItem.component';

export const ToolsGrid = () => {
  return (
    <div className="grid-tools-container">
      <ToolItem />
      <ToolItem />
      <ToolItem />
    </div>
  );
};
