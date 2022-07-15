import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ToolItem.style.css';
import { Link } from 'react-router-dom';

export const ToolItem = ({
  title,
  timeFrameMin,
  timeFrameMax,
  groupSizeMax,
  groupSizeMin,
  pitch,
}) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleChangeFavourite = () => {
    setIsFavourite((previousIcon) => {
      return !previousIcon;
    });
  };
  const availableCategories = ['INNOVATION', 'ACTION', 'ENERGIZER', 'TEAM'];
  const toolCategories = ['ACTION', 'TEAM', 'INNOVATION']; //  should get it from category table when full database and api is ready,
  const categoriesStreakOut = availableCategories.map((category) => {
    const isCategoryForTheTool = toolCategories.includes(category);
    return (
      <li>
        {isCategoryForTheTool ? (
          <li className="selected-category">{category}</li>
        ) : (
          <li className="not-selected-category">{category}</li>
        )}
      </li>
    );
  });
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
        <div className="categories-container">
          <ul className="category-names">{categoriesStreakOut}</ul>
        </div>
        <div className="toolbox-description-container">
          <span className="product-description">{pitch}</span>
          <h6 className="product-title">{title}</h6>
        </div>
        <div className="title-image">
          <img
            src="/assets/images/tool-pic-stinky-fish.png"
            alt="stinky-fish"
          />
        </div>
      </div>
      <div className="button-container">
        <button type="button" className="tool-button">
          <Link to="/ToolDetailPage">VIEW TOOL</Link>
        </button>
      </div>
    </div>
  );
};

ToolItem.propTypes = {
  title: PropTypes.string,
  timeFrameMin: PropTypes.string,
  timeFrameMax: PropTypes.string,
  groupSizeMax: PropTypes.string,
  groupSizeMin: PropTypes.string,
  pitch: PropTypes.string,
};

ToolItem.defaultProps = {
  title: null,
  timeFrameMin: null,
  timeFrameMax: null,
  groupSizeMax: null,
  groupSizeMin: null,
  pitch: null,
};
