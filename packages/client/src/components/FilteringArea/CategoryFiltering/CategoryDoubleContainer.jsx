import React from 'react';
import './category.css';
// import PropTypes from 'prop-types';

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

// CategoryDoubleContainer.propTypes = {
//   tool: PropTypes.isRequired,
// };

// CategoryDoubleContainer.defaultProps = {
//   tool: 'CategoryDoubleContainer',
// };
