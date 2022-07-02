import React, { useState } from 'react';
import icon from './Vector_385.png';

export const TimeFrame = () => {
  const [selectedTimeFrame, setTimeFrame] = useState('1-200');

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
              setTimeFrame('1-200');
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
              setTimeFrame('1-4');
            }}
          >
            1-4
          </button>
          <button
            type="button"
            className="small-filtering-button"
            onClick={() => {
              setTimeFrame('5-10');
            }}
          >
            5-10
          </button>
          <button
            type="button"
            className="small-filtering-button"
            onClick={() => {
              setTimeFrame('11-20');
            }}
          >
            11-20
          </button>
          <button
            type="button"
            className="small-filtering-button"
            onClick={() => {
              setTimeFrame('21-50');
            }}
          >
            21-50
          </button>
          <button
            type="button"
            className="small-filtering-button"
            onClick={() => {
              setTimeFrame('51-100');
            }}
          >
            51-100
          </button>
          <button
            type="button"
            className="small-filtering-button"
            onClick={() => {
              setTimeFrame('101-200');
            }}
          >
            101-200
          </button>
        </section>
      </section>
    </section>
  );
};
