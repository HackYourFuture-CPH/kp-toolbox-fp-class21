import React, { useState } from 'react';
import './Sorting.style.css';
import PropTypes from 'prop-types';

export const Sorting = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sorting-wrapper">
      <div className="sorting-area sorting-area-general">
        <button
          type="button"
          className="sorting-button-general sortby-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="sorting-header">Sort by</p>
          {isOpen ? (
            <img
              src="/assets/vectors/vector-arrow-up.svg"
              alt="Arrow up to close sorting dropdown menu"
            />
          ) : (
            <img
              src="/assets/vectors/vector-arrow-down.svg"
              alt="Arrow down to open sorting dropdown menu"
            />
          )}
        </button>
        {isOpen ? (
          <div className="sorting-options-area sorting-area-general">
            <button
              onClick={(e) => {
                props.setSelected(e.target.value);
              }}
              value="a-z"
              type="button"
              className="sorting-button-general sorting-options-button"
            >
              A-Z
            </button>
            <button
              onClick={(e) => {
                props.setSelected(e.target.value);
              }}
              value="date"
              type="button"
              className="sorting-button-general sorting-options-button"
            >
              Recently Added
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

Sorting.propTypes = {
  setSelected: PropTypes.func.isRequired,
};
