import React, { useState, useEffect } from 'react';
import './FilteringArea.css';
// import './CategoryFiltering/category.css';
import { CategoryList } from './CategoryFiltering/CategoryList';
import { ParticipantsNr } from './ParticipantsNr/ParticipantsNr.component';
import { TimeFrame } from './TimeFrame/TimeFrame.component';

export const FilteringArea = () => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [numberOfParticipantsFilter, setNumberOfParticipantsFilter] =
    useState('');
  const [timeFrameFilter, setTimeFrameFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);

  // function fetchTools() {
  //   const fetchedData = useCallback(async () => {
  //     await fetch(
  //       `/tools?category=${categoryFilter}&particpants=${numberOfParticipantsFilter}&timeframe=${timeFrameFilter}`,
  //     );
  //     const response = await fetchedData.json();
  //     setIsLoading(false);
  //     setResults(response);
  //   });
  // }

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchTools();
  // }, [categoryFilter, fetchTools, numberOfParticipantsFilter, timeFrameFilter]);

  return (
    <section className="filteringAreaWrapper">
      <div className="filteringAreaContent">
        <CategoryList
          selectedValue={categoryFilter}
          setSelectedValue={setCategoryFilter}
        />
        <div className="participantNrTimeFrameSection">
          <ParticipantsNr
            selectedValue={numberOfParticipantsFilter}
            setSelectedValue={setNumberOfParticipantsFilter}
          />
          <TimeFrame
            selectedValue={timeFrameFilter}
            setSelectedValue={setTimeFrameFilter}
          />
        </div>
      </div>
    </section>
  );
};
