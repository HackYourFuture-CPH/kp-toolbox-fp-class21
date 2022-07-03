import React, { useState } from 'react';
import icon from './Vector_385.png';
import PropTypes, { func } from 'prop-types';

export const TimeFrame = ({ setSelectedValue }) => {
  return (
    <section className="flex-column">
      {/* TIME FRAME */}
      <h2 className="category-title1"> TIME FRAME</h2>
      <section className="flex mobile-flex-vertical">
        <section className="flex flex-grow-double">
          <img className="clockStyle" src={icon} alt="timeframe" />
          <button
            type="button"
            className="category-single-title-container"
            onClick={() => {
              setSelectedValue('1-200');
            }}
          >
            SHOW ALL
          </button>
        </section>
        <section className="small-buttons-section">
          <button
            type="button"
            className="small-filtering-button"
            onClick={() => {
              setSelectedValue('1-4');
            }}
          >
            1-4
          </button>
          <button
            type="button"
            className="small-filtering-button"
            onClick={() => {
              setSelectedValue('5-10');
            }}
          >
            5-10
          </button>
          <button
            type="button"
            className="small-filtering-button"
            onClick={() => {
              setSelectedValue('11-20');
            }}
          >
            11-20
          </button>
          <button
            type="button"
            className="small-filtering-button"
            onClick={() => {
              setSelectedValue('21-50');
            }}
          >
            21-50
          </button>
          <button
            type="button"
            className="small-filtering-button"
            onClick={() => {
              setSelectedValue('51-100');
            }}
          >
            51-100
          </button>
          <button
            type="button"
            className="small-filtering-button"
            onClick={() => {
              setSelectedValue('101-200');
            }}
          >
            101-200
          </button>
        </section>
      </section>
    </section>
  );
};

TimeFrame.defaultProps = {
  setSelectedValue: func,
};

TimeFrame.propTypes = {
  setSelectedValue: PropTypes.func,
};
