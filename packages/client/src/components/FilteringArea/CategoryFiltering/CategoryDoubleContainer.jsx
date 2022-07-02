import React from 'react';

export const CategoryDoubleContainer = (tool) => {
  const { category } = tool;
  return (
    <button type="button" className="category-double-container">
      <div className="category-icon-container">
        <img className="category-icon" src="" alt="tool" />
      </div>
      <div className="category-double-title-container">{category}</div>
    </button>
  );
};
