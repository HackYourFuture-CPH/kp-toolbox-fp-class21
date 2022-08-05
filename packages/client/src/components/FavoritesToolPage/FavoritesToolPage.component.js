import React, { useState, useEffect, useMemo } from 'react';
import getApiBaseUrl from '../../utils/getApiBaseURL';
import { ToolItem } from '../ToolItem/ToolItem.component';
import { Sorting } from '../Sorting/Sorting.component';

// using this user_id needed before Firebase implemented
const userId = 1;

export const FavouritePage = () => {
  const [Favourites, setFavourites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    async function fetchFavourites() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${getApiBaseUrl()}/api/favourites/${userId}`,
        );
        const favoritesJson = await response.json();
        setFavourites(favoritesJson);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw error;
      }
    }
    fetchFavourites();
  }, []);

  const sortedTools = useMemo(() => {
    let result = Favourites;
    if (selected === 'a-z') {
      result = result.sort((a, b) => {
        const titleA = a.name.toUpperCase();
        const titleB = b.name.toUpperCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
    } else if (selected === 'date') {
      result = result.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateB - dateA;
      });
    }
    return result;
  }, [Favourites, selected]);

  const toolsToRender = isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      {sortedTools.map((tool, i) => {
        return <ToolItem index={i} key={tool.id} tool={tool} />;
      })}
    </>
  );

  return (
    <div>
      <Sorting setSelected={setSelected} />
      <div className="grid-tools-container">{toolsToRender}</div>
    </div>
  );
};
