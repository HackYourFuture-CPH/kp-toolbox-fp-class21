import React from 'react';
import { CategoryDoubleContainer } from './CategoryDoubleContainer';

const tools = [
  { id: 1, category: 'Energizers' },
  { id: 2, category: 'Action & decision making' },
  { id: 3, category: 'Innovation & ideation' },
  { id: 4, category: 'Meeting & facilitation' },
  { id: 5, category: 'Team development & collaboration' },
  { id: 6, category: 'Check-in & check-out' },
];

export const CategoryList = () => {
  return (
    <div className="layout">
      <h2 className="category-title">Browse by CATEGORY</h2>
      <div className="category-container">
        <div className="category-left-side-container">
          <a href="/" className="category-single-title-container">
            Show all
          </a>
          <div className="category-single-icon-container">
            <img className="category-icon" src="" alt="tool" />
          </div>
        </div>
        <div className="category-right-side-container">
          {tools.map((tool) => (
            <CategoryDoubleContainer key={tool.id} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
};
