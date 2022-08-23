import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../firebase/AuthContext';
import getApiBaseUrl from '../../utils/getApiBaseURL';
import './ToolItem.style.css';

export const ToolItem = ({ tool }) => {
  const { googleSignIn, userId, user } = UserAuth();
  const title = tool.name;
  const { picture, id, pitch, categories } = tool;
  const timeFrameMin = tool.time_frame_min;
  const timeFrameMax = tool.time_frame_max;
  const groupSizeMin = tool.group_size_min;
  const groupSizeMax = tool.group_size_max;

  const [isFavourite, setIsFavourite] = useState(false);

  const handleChangeFavourite = () => {
    // eslint-disable-next-line no-console
    console.log('user', user);
    if (userId) {
      if (isFavourite) {
        fetch(`${getApiBaseUrl()}/api/favourites`, {
          method: 'DELETE',
          body: JSON.stringify({
            tool_id: id,
          }),
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${user.accessToken}`,
          },
        }).then((result) => {
          if (result.ok) {
            setIsFavourite(false);
          }
        });
      } else {
        fetch(`${getApiBaseUrl()}/api/favourites`, {
          method: 'POST',
          body: JSON.stringify({
            tool_id: id,
          }),
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${user.accessToken}`,
          },
        }).then((result) => {
          if (result.ok) {
            setIsFavourite(true);
          }
        });
      }
    } else {
      googleSignIn();
      fetch(`${getApiBaseUrl()}/api/favourites`, {
        method: 'POST',
        body: JSON.stringify({ tool_id: id }),
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${user.accessToken}`,
        },
      }).then((result) => {
        if (result.ok) {
          setIsFavourite(false);
        }
      });
    }
  };

  useEffect(() => {
    if (userId) {
      fetch(`${getApiBaseUrl()}/api/favourites/${userId}`, {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${user.accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          const filteredResult = result.filter((item) => item.id === id);
          if (filteredResult.length > 0) {
            setIsFavourite(true);
          }
        });
    } else {
      setIsFavourite(false);
    }
  }, [userId, id, user.accessToken]);

  const availableCategories = ['Innovation', 'Action', 'Energizer', 'Team'];
  const categoriesStreakOut = availableCategories.map((category) => {
    return categories.includes(category) ? (
      <li className="selected-category">{category.toUpperCase()}</li>
    ) : (
      <li className="not-selected-category">{category.toUpperCase()}</li>
    );
  });
  const altForToolPicture = picture.slice(20, -4);

  return (
    <div className="product-card-container">
      <div className="main-part-card">
        <div className="favourites-icon">
          {isFavourite ? (
            <img
              src="/assets/vectors/vector-favourites-full-heart.svg"
              alt="favourites-full-icon"
              role="presentation"
              onClick={handleChangeFavourite}
            />
          ) : (
            <img
              src="/assets/vectors/vector-favourites-empty-heart.svg"
              alt="favourites-empty-icon"
              role="presentation"
              onClick={handleChangeFavourite}
            />
          )}
        </div>
        <div className="toolbox-description-container">
          <h6 className="product-title">{title}</h6>
          <span className="product-description">{pitch}</span>
        </div>
        <div className="title-image">
          <img src={picture} alt={`Tool ${altForToolPicture}`} />
        </div>
        <div className="categories-container">
          <ul className="category-names">{categoriesStreakOut}</ul>
        </div>
        <div className="icon-container">
          <div className="container-participants">
            <div className="toolbox-img">
              <img src="/assets/vectors/vector-people.svg" alt="people-icon" />
            </div>
            <div className="toolbox-participants">{`${groupSizeMin}-${groupSizeMax}`}</div>
          </div>
          <div className="container-time">
            <div className="toolbox-img">
              <img src="/assets/vectors/vector-clock.svg" alt="time-icon" />
            </div>
            <div className="toolbox-participants">{`${timeFrameMin}-${timeFrameMax}`}</div>
          </div>
        </div>
      </div>

      <Link to={`/tools/${tool.id}`}>
        <div className="button-container">
          <button type="button" className="tool-button">
            VIEW TOOL
          </button>
        </div>
      </Link>
    </div>
  );
};

ToolItem.propTypes = {
  tool: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  id: PropTypes.number,
  name: PropTypes.string,
  time_frame_min: PropTypes.number,
  time_frame_max: PropTypes.number,
  group_size_max: PropTypes.number,
  group_size_min: PropTypes.number,
  pitch: PropTypes.string,
  picture: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
};

ToolItem.defaultProps = {
  tool: [],
  id: null,
  name: null,
  time_frame_min: null,
  time_frame_max: null,
  group_size_max: null,
  group_size_min: null,
  pitch: null,
  picture: null,
  categories: [],
};
