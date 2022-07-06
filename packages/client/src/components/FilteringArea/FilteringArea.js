import React from 'react';
import './FilteringArea.css';
import { FilteringSection } from './FilteringSection';
import {
  categories,
  timeframes,
  numberOfParticipants,
} from './FilterArea.config';

export const FilteringArea = () => {
  return (
    <section className="filtering-area">
      <FilteringSection
        data={categories}
        title="CATEGORY"
        iconName="vector-categories"
      />
      <FilteringSection
        data={numberOfParticipants}
        title="NUMBER OF PARTICIPANTS"
        iconName="vector-people"
      />
      <FilteringSection
        data={timeframes}
        title="TIME FRAME [minutes]"
        iconName="vector-clock"
      />
    </section>
  );
};
