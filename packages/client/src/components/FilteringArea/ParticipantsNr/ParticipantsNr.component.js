import React, { useState } from 'react';
import icon from './filter-participants-vector-people.png';

export const ParticipantsNr = () => {
  const [selectedParticipantsNr, setParticipantsNr] = useState('1-200');

  return (
    <section className="flex-column">
      {/* ParticipantsNr */}
      <h2 className="category-title1">NUMBER OF PARTICIPANTS </h2>
      <section className="flex mobile-flex-vertical">
        <section className="flex">
          <img className="peopleStyle" src={icon} alt="participants" />
          <button
            type="button"
            className="category-single-title-container"
            onClick={() => {
              setParticipantsNr('1-200');
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
              setParticipantsNr('1-4');
            }}
          >
            1-4
          </button>
          <button
            type="button"
            className="small-filtering-button"
            onClick={() => {
              setParticipantsNr('5-10');
            }}
          >
            5-10
          </button>
          <button
            type="button"
            className="small-filtering-button"
            onClick={() => {
              setParticipantsNr('11-20');
            }}
          >
            11-20
          </button>
          <button
            type="button"
            className="small-filtering-button"
            onClick={() => {
              setParticipantsNr('21-50');
            }}
          >
            21-50
          </button>
          <button
            type="button"
            className="small-filtering-button"
            onClick={() => {
              setParticipantsNr('51-100');
            }}
          >
            51-100
          </button>
          <button
            type="button"
            className="small-filtering-button"
            onClick={() => {
              setParticipantsNr('101-200');
            }}
          >
            101-200
          </button>
        </section>
      </section>
    </section>
  );
};
