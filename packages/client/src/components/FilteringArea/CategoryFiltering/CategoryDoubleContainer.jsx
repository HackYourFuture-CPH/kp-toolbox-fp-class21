import React from 'react';
import PropTypes, { func } from 'prop-types';

export const CategoryDoubleContainer = (props) => {
  const { category } = props.tool;
  return (
    <button
      type="button"
      className="category-double-container"
      onClick={() => props.setSelectedValue(category)}
    >
      <div className="category-icon-container mobile-hide">
        <img className="category-icon" src="" alt="tool" />
      </div>
      <div className="category-double-title-container">{category}</div>
    </button>
  );
};

CategoryDoubleContainer.defaultProps = {
  tool: ['any', 'array', 'object'],
  setSelectedValue: func,
};

CategoryDoubleContainer.propTypes = {
  tool: ['any', 'array', 'object'],
  setSelectedValue: PropTypes.func,
};
