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
  picture,
}) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleChangeFavourite = () => {
    setIsFavourite((previousIcon) => {
      return !previousIcon;
    });
  };

  let firstCategoryClassName = 'not-selected-category';
  let secondCategoryClassName = 'not-selected-category';
  let thirdCategoryClassName = 'not-selected-category';
  let fourthCategoryClassName = 'not-selected-category';
  const categories = ['INNOVATION', 'ACTION', 'TEAM']; //  should get it from category table when full database is ready,

  for (let i = 0; i < categories.length; i += 1) {
    if (categories[i] === 'INNOVATION') {
      firstCategoryClassName = 'selected-category';
    }
    if (categories[i] === 'TEAM') {
      secondCategoryClassName = 'selected-category';
    }
    if (categories[i] === 'ENERGIZER') {
      thirdCategoryClassName = 'selected-category';
    }
    if (categories[i] === 'ACTION') {
      fourthCategoryClassName = 'selected-category';
    }
  }
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
          <ul className="category-names">
            <li className={`${firstCategoryClassName}`}>INNOVATION</li>
            <li className={`${secondCategoryClassName}`}>TEAM</li>
            <li className={`${thirdCategoryClassName}`}>ENERGIZER</li>
            <li className={`${fourthCategoryClassName}`}>ACTION</li>
          </ul>
        </div>
        <div className="toolbox-description-container">
          <span className="product-description">{pitch}</span>
          <h6 className="product-title">{title}</h6>
        </div>
        <div className="title-image">
          <img src={picture} alt="stinky-fish" />
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
  picture: PropTypes.string,
};

ToolItem.defaultProps = {
  title: null,
  timeFrameMin: null,
  timeFrameMax: null,
  groupSizeMax: null,
  groupSizeMin: null,
  pitch: null,
  picture: null,
};
