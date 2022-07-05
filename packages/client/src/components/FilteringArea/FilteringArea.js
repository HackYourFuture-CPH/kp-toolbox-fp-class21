import React from 'react';
import './FilteringArea.css';
import { FilterByCategory } from './FilterByCategory';
import { FilterByNumParticipants } from './FilterByNumParticipants';
import { FilterByTimeframe } from './FilterByTimeframe';

export const FilteringArea = () => {
  return (
    <section className="filtering-area">
      <FilterByCategory />
      <FilterByNumParticipants />
      <FilterByTimeframe />
    </section>
  );
};
