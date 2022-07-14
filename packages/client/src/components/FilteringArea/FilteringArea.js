/* eslint-disable */
import React, { useState, useContext } from 'react';
import './FilteringArea.css';
import { FilteringSection } from './FilteringSection';
import { ToolsContext } from '../../containers/LandingPage/Context';
import {
  categories,
  timeframes,
  numberOfParticipants,
} from './FilterArea.config';

export const FilteringArea = (props) => {
  const {
    tools: [tools, setTools],
  } = {
    tools: useState(0),
    ...(props.state || {}),
  };
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const [timeframesSelected, setTimeframesSelected] = useState([]);
  const [participantsNumSelected, setParticipantsNumSelected] = useState([]);

  return (
    <section className="filtering-area">
      <FilteringSection
        data={categories}
        title="CATEGORY"
        iconName="vector-categories"
        checkboxName="category"
        selectedValue={categoriesSelected}
        setSelectedValue={setCategoriesSelected}
        fetchKey="categoriesSelected"
      />
      <FilteringSection
        data={numberOfParticipants}
        title="NUMBER OF PARTICIPANTS"
        iconName="vector-people"
        checkboxName="participants"
        selectedValue={participantsNumSelected}
        setSelectedValue={setParticipantsNumSelected}
        fetchKey="participantsNumSelected"
      />
      <FilteringSection
        data={timeframes}
        title="TIME FRAME [minutes]"
        iconName="vector-clock"
        checkboxName="timeframe"
        selectedValue={timeframesSelected}
        setSelectedValue={setTimeframesSelected}
        fetchKey="timeframesSelected"
      />
    </section>
  );
};
