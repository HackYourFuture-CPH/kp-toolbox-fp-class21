import React, { useState } from 'react';

export const TimeFrame = () => {
  const [selectedTimeFrame, setTimeFrame] = useState('1-200');
  const style = {
    boxSizing: 'border-box',
    color: '#F5F5F5',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    flexWrap: 'wrap',
    textAlign: 'center',
  };
  const clockStyle = {
    background: 'rgba(0, 0, 0, 0.3)',
    boxSizing: 'border-box',
    border: '.3rem solid rgba(0, 0, 0, 0.3)',
    borderRadius: '.1rem',
    color: '#F5F5F5',
    aspectRatio: '1 / 1',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    flexWrap: 'wrap',
    textAlign: 'center',
    lineHeight: '1rem',
    margin: '0.2rem',
    padding: '1rem',
  };
  const style2 = {
    background: 'rgba(0, 0, 0, 0.3)',
    boxSizing: 'border-box',
    color: '#F5F5F5',
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    width: '40%',
    justifyContent: 'space-between',
    margin: '0.2rem',
    lineHeight: '2.5rem',
    border: 'none',
    textDecoration: 'none',
  };
  const style3 = {
    background: 'rgba(0, 0, 0, 0.3)',
    boxSizing: 'border-box',
    border: '.3rem solid #8C5C02',
    color: '#F5F5F5',
    aspectRatio: '1 / 1',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    flexWrap: 'wrap',
    textAlign: 'center',
    lineHeight: '1rem',
    margin: '0.2rem',
    padding: '1rem',
  };
  const containerStyle = {
    display: 'flex',
  };
  const timeFrame = {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '2rem',
    fontSize: '2rem',
    lineHeight: '3rem',
    /* or 100% */
    alignItems: 'center',
    color: '#F5F5F5',
  };
  return (
    <section style={{ backgroundColor: 'rgb(58, 82, 82)' }}>
      {/* TIME FRAME */}
      <span style={timeFrame}> TIME FRAME</span>
      <section style={containerStyle} className="time-frame-div">
        <section style={containerStyle}>
          <img style={clockStyle} src="./Vector 385.png" alt="" />
          <button
            type="button"
            style={style3}
            onClick={() => {
              setTimeFrame('1-200');
            }}
          >
            SHOW ALL
          </button>
        </section>
        <section style={style}>
          <button
            type="button"
            style={style2}
            onClick={() => {
              setTimeFrame('1-4');
            }}
          >
            1-4
          </button>
          <button
            type="button"
            style={style2}
            onClick={() => {
              setTimeFrame('5-10');
            }}
          >
            5-10
          </button>
          <button
            type="button"
            style={style2}
            onClick={() => {
              setTimeFrame('11-20');
            }}
          >
            11-20
          </button>
          <button
            type="button"
            style={style2}
            onClick={() => {
              setTimeFrame('21-50');
            }}
          >
            21-50
          </button>
          <button
            type="button"
            style={style2}
            onClick={() => {
              setTimeFrame('51-100');
            }}
          >
            51-100
          </button>
          <button
            type="button"
            style={style2}
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
