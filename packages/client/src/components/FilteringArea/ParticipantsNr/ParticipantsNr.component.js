import React, { useState } from 'react';
import icon from './filter-participants-vector-people.png';

export const ParticipantsNr = () => {
  const [selectedParticipantsNr, setParticipantsNr] = useState('1-200');

  return (
    <section>
      {/* ParticipantsNr */}
      <div className="category-title1">NUMBER OF PARTICIPANTS </div>
      <section className="containerStyle">
        <section className="containerStyle">
          <img className="peopleStyle" src={icon} alt="paticipants" />
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
        <section className="style">
          <button
            type="button"
            className="style2"
            onClick={() => {
              setParticipantsNr('1-4');
            }}
          >
            1-4
          </button>
          <button
            type="button"
            className="style2"
            onClick={() => {
              setParticipantsNr('5-10');
            }}
          >
            5-10
          </button>
          <button
            type="button"
            className="style2"
            onClick={() => {
              setParticipantsNr('11-20');
            }}
          >
            11-20
          </button>
          <button
            type="button"
            className="style2"
            onClick={() => {
              setParticipantsNr('21-50');
            }}
          >
            21-50
          </button>
          <button
            type="button"
            className="style2"
            onClick={() => {
              setParticipantsNr('51-100');
            }}
          >
            51-100
          </button>
          <button
            type="button"
            className="style2"
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
