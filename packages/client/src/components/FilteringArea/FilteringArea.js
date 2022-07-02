import React from 'react';
import './FilteringArea.css';
// import './CategoryFiltering/category.css';
import { CategoryList } from './CategoryFiltering/CategoryList';
import { ParticipantsNr } from './ParticipantsNr/ParticipantsNr.component';
import { TimeFrame } from './TimeFrame/TimeFrame.component';

export const FilteringArea = () => {
  return (
    <section className="filteringAreaWrapper">
      <div className="filteringAreaContent">
        <CategoryList />
        <div className="participantNrTimeFrameSection">
          <ParticipantsNr />
          <TimeFrame />
        </div>
      </div>
    </section>
  );
};
