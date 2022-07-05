import React from 'react';

const timeframes = [
  { id: 1, title: '5-30' },
  { id: 2, title: '30-60' },
  { id: 3, title: '60-120' },
];

export const FilterByTimeframe = () => {
  return (
    <div className="filtering-category">
      <h4 className="filtering-category-title">
        Time frame <span className="lower-case">[minutes]</span>
      </h4>
      <div className="filtering-horizontal-flex">
        <img
          src="/assets/vectors/vector-clock.svg"
          alt="number of participants"
        />
        <button type="button" className="show-all-button">
          Show all
        </button>
      </div>
      {timeframes.map((record) => {
        return (
          <div>
            <input
              type="checkbox"
              className="filtering-checkbox"
              value={record.id}
              id={record.title}
            />
            <label className="filtering-option" htmlFor={record.title}>
              {record.title}
            </label>
          </div>
        );
      })}
    </div>
  );
};
