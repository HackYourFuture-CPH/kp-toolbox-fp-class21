import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { WelcomeBox } from '../../components/WelcomeBox/WelcomeBox';
import { KpImage } from '../../components/KpImage/KpImage';

import {
  FilteringArea,
  FilteringSection,
  useFilteringSection,
} from '../../components/FilteringArea';
import './LandingPage.Style.css';
import { ToolsGrid } from '../../components/ToolsGrid/ToolsGrid.component';
import { useFilteredTools } from './useFilteredTools';
import {
  categoriesMock,
  numberOfParticipantsMock,
  timeframesMock,
} from './filterMockData';

export const LandingPage = () => {
  const [searchBarText, setSearchBarText] = useState('');
  const [searchResultNull, setSearchResultNull] = useState(false);

  const filterByToolName = (value) => {
    setSearchBarText(value);
  };
  const { filterActions, tools, filters } = useFilteredTools();
  const categories = useFilteringSection();
  const numberOfParticipants = useFilteringSection();
  const timeframes = useFilteringSection();

  useEffect(() => {
    categories.setOptions(categoriesMock);
    numberOfParticipants.setOptions(numberOfParticipantsMock);
    timeframes.setOptions(timeframesMock);
    // It is just a mock data
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="landing-page-container">
      <div className="image-background-wrapper">
        <div>
          <WelcomeBox />
          <SearchBar
            filterByToolNameAction={filterByToolName}
            searchResultNull={searchResultNull}
          />
          <FilteringArea>
            <FilteringSection
              selectedOptions={filters.category}
              {...categories}
              title="CATEGORY"
              iconName="vector-categories"
              checkboxName="category"
              fetchKey="category"
              {...filterActions}
            />
            <FilteringSection
              selectedOptions={filters.participantsNumber}
              {...numberOfParticipants}
              title="NUMBER OF PARTICIPANTS"
              iconName="vector-people"
              checkboxName="participants"
              fetchKey="participantsNumber"
              {...filterActions}
            />
            <FilteringSection
              selectedOptions={filters.timeframe}
              {...timeframes}
              title="TIME FRAME [minutes]"
              iconName="vector-clock"
              checkboxName="timeframe"
              fetchKey="timeframe"
              {...filterActions}
            />
          </FilteringArea>
        </div>
      </div>

      <ToolsGrid
        {...tools}
        searchBarText={searchBarText}
        setSearchResultNull={setSearchResultNull}
      />
      <KpImage />
    </div>
  );
};
