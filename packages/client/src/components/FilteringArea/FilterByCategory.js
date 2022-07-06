import React from 'react';

const categories = [
  { id: 1, title: 'Innovation' },
  { id: 2, title: 'Team' },
  { id: 3, title: 'Energizer' },
  { id: 4, title: 'Action' },
];

export const FilterByCategory = () => {
  return (
    <div className="filtering-category">
      <div className="filtering-category-mobile-view">
        <h4 className="filtering-category-title">Category</h4>
        <div className="filtering-horizontal-flex">
          <img src="/assets/vectors/vector-categories.svg" alt="category" />
          <button type="button" className="show-all-button">
            Show all
          </button>
        </div>
      </div>
      <div className="filtering-checkbox-mobile-view-for-category">
        {categories.map((category) => {
          return (
            <div>
              <input
                type="checkbox"
                className="filtering-checkbox"
                value={category.id}
                id={category.title}
              />
              <label className="filtering-option" htmlFor={category.title}>
                {category.title}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
