import React, { useState } from 'react';
import icon from './Vector_385.png';

export const TimeFrame = () => {
  const [selectedTimeFrame, setTimeFrame] = useState('1-200');

  return (
    <section>
      {/* TIME FRAME */}
      <div className="category-title1"> TIME FRAME</div>
      <section className="containerStyle">
        <section className="containerStyle">
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
        <section className="style">
          <button
            type="button"
            className="style2"
            onClick={() => {
              setTimeFrame('1-4');
            }}
          >
            1-4
          </button>
          <button
            type="button"
            className="style2"
            onClick={() => {
              setTimeFrame('5-10');
            }}
          >
            5-10
          </button>
          <button
            type="button"
            className="style2"
            onClick={() => {
              setTimeFrame('11-20');
            }}
          >
            11-20
          </button>
          <button
            type="button"
            className="style2"
            onClick={() => {
              setTimeFrame('21-50');
            }}
          >
            21-50
          </button>
          <button
            type="button"
            className="style2"
            onClick={() => {
              setTimeFrame('51-100');
            }}
          >
            51-100
          </button>
          <button
            type="button"
            className="style2"
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
