import React, { useState, useEffect, useMemo } from 'react';
import getApiBaseUrl from '../../utils/getApiBaseURL';
import { ToolItem } from '../ToolItem/ToolItem.component';
import { Sorting } from '../Sorting/Sorting.component';
import { KpImage } from '../KpImage/KpImage';
import { UserAuth } from '../../firebase/AuthContext';
import { ImagePlaceHolder } from '../WelcomeBox/ImagePlaceHolder/ImagePlaceHolder.component';
import './FavoritesToolPage.style.css';

export const FavouritePage = () => {
  const { userId, user } = UserAuth();
  const [favourites, setFavourites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    async function fetchFavourites() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${getApiBaseUrl()}/api/favourites/${userId}`,
          {
            headers: {
              'Content-Type': 'application/json',
              authorization: `Bearer ${user.accessToken}`,
            },
          },
        );
        const favoritesJson = await response.json();
        setFavourites(favoritesJson);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw error;
      }
    }
    if (userId) {
      fetchFavourites();
    }
  }, [user, userId]);

  const sortedTools = useMemo(() => {
    let result = favourites;
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
    }
    if (selected === 'date') {
      result = result.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateB - dateA;
      });
    }
    return result;
  }, [favourites, selected]);

  let toolsToRender;
  if (isLoading) {
    toolsToRender = <p className="message-text">Loading...</p>;
  } else if (sortedTools.length > 0) {
    toolsToRender = (
      <div className="grid-tools-container">
        {sortedTools.map((tool, i) => {
          return <ToolItem index={i} key={tool.id} tool={tool} />;
        })}
      </div>
    );
  } else {
    toolsToRender = (
      <p className="message-text">
        You haven&#39;t added anything to favourite tools yet...
      </p>
    );
  }

  return (
    <div>
      <section className="favourites-welcome-box-wrapper">
        <p className="favourites-heading">KAOSPILOT toolbox / favourites</p>
        <p className="favourites-welcome-text">
          Here are your favourite tools :
        </p>
        <ImagePlaceHolder />
      </section>
      <div className={favourites.length === 0 ? 'hide-sorting' : ''}>
        <Sorting setSelected={setSelected} />
      </div>
      {toolsToRender}
      <KpImage />
    </div>
  );
};
