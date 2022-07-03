import React, { useState } from 'react';
import icon from './filter-participants-vector-people.png';
import PropTypes, { func } from 'prop-types';

export const ParticipantsNr = ({ setSelectedValue }) => {
  return (
    <section className="flex-column">
      {/* ParticipantsNr */}
      <h2 className="category-title1">NUMBER OF PARTICIPANTS </h2>
      <div className="flex mobile-flex-vertical">
        <div className="flex">
          <img className="peopleStyle" src={icon} alt="participants" />
          <button
            type="button"
            className="category-single-title-container"
            onClick={() => {
              setSelectedValue('1-200');
            }}
          >
            SHOW ALL
          </button>
        </div>
        <div className="small-buttons-section">
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
        </div>
      </div>
    </section>
  );
};

ParticipantsNr.defaultProps = {
  setSelectedValue: func,
};

ParticipantsNr.propTypes = {
  setSelectedValue: PropTypes.func,
};
