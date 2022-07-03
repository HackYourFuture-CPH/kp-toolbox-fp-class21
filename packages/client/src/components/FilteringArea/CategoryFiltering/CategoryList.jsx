import React from 'react';
import PropTypes, { func } from 'prop-types';
import { CategoryDoubleContainer } from './CategoryDoubleContainer';

const tools = [
  { id: 1, category: 'Energizers' },
  {
    id: 2,
    category: `Action & decision making`,
  },
  { id: 3, category: 'Innovation & ideation' },
  { id: 4, category: 'Meeting & facilitation' },
  { id: 5, category: 'Team development & collaboration' },
  { id: 6, category: 'Check-in & check-out' },
];

export const CategoryList = ({ setSelectedValue }) => {
  return (
    <div className="layout">
      <div className="category-title">Browse by CATEGORY</div>
      <div className="category-container">
        <div className="category-left-side-container">
          <button
            type="button"
            className="category-single-title-container mobile-single-container"
            onClick={() => {
              setSelectedValue('');
            }}
          >
            Show all
          </button>
          <div className="category-single-icon-container mobile-single-container">
            <img className="category-icon" src="" alt="tool" />
          </div>
        </div>
        <div className="category-right-side-container">
          {tools.map((tool) => (
            <CategoryDoubleContainer
              key={tool.id}
              {...tool}
              setSelectedValue={setSelectedValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

CategoryList.defaultProps = {
  selectedValue: '',
  setSelectedValue: func,
};

CategoryList.propTypes = {
  selectedValue: PropTypes.string,
  setSelectedValue: PropTypes.func,
};
