import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ToolItem.style.css';
import { Link } from 'react-router-dom';

export const ToolItem = ({ tool }) => {
  const title = tool.name;
  const { picture } = tool;
  const timeFrameMin = tool.time_frame_min;
  const timeFrameMax = tool.time_frame_max;
  const groupSizeMin = tool.group_size_min;
  const groupSizeMax = tool.group_size_max;
  const { pitch } = tool;
  const { categories } = tool;
  const [isFavourite, setIsFavourite] = useState(false);

  const handleChangeFavourite = () => {
    setIsFavourite((previousIcon) => {
      return !previousIcon;
    });
  };
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
          <img src={picture} alt={`Tool ${altForToolPicture}`} />
        </div>
      </div>
      <div className="button-container">
        <button type="button" className="tool-button">
          <Link to={`/tools/${tool.id}`}>VIEW TOOL</Link>
        </button>
      </div>
    </div>
  );
};

ToolItem.propTypes = {
  tool: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
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
  name: null,
  time_frame_min: null,
  time_frame_max: null,
  group_size_max: null,
  group_size_min: null,
  pitch: null,
  picture: null,
  categories: [],
};
