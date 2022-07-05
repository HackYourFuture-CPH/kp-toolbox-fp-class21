import React from 'react';

const numberOfParticipants = [
  { id: 1, title: '2-20' },
  { id: 2, title: '20-40' },
  { id: 3, title: '40-100' },
];

export const FilterByNumParticipants = () => {
  return (
    <div className="filtering-category">
      <h4 className="filtering-category-title">Number of participants</h4>
      <div className="filtering-horizontal-flex">
        <img
          src="/assets/vectors/vector-people.svg"
          alt="number of participants"
        />
        <button type="button" className="show-all-button">
          Show all
        </button>
      </div>
      {numberOfParticipants.map((record) => {
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