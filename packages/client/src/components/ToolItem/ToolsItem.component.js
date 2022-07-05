import React from 'react';
import PropTypes from 'prop-types';
import './ToolsItem.style.css';
import { Link } from 'react-router-dom';

export const ToolsItem = ({ title, timeFrame, groupSize, description }) => {
  return (
    <div className="product-card-container">
      <div className="first">
        <div className="favourites-icon">
          <img
            src="/assets/vectors/vector-favourites-empty-heart.svg"
            alt="favourites-icon"
          />
        </div>
        <div className="icon-container">
          <div className="container-participants">
            <div className="toolbox-img">
              <img src="/assets/vectors/vector-people.svg" alt="people-icon" />
            </div>
            <div className="toolbox-participants">{groupSize}</div>
          </div>
          <div className="container-time">
            <div className="toolbox-img">
              <img src="/assets/vectors/vector-clock.svg" alt="time-icon" />
            </div>
            <div className="toolbox-participants">{timeFrame}</div>
          </div>
        </div>
        <div className="categorys-container">
          <ul className="category-names">
            <li>INNOVATION</li>
            <li>TEAM</li>
            <li>ENERGIZER</li>
            <li>ACTION</li>
          </ul>
        </div>
        <div className="toolbox-description-container">
          <span className="product-description">{description}</span>
          <h6 className="product-title">{title}</h6>
        </div>
        <div className="title-image">
          <img
            src="/assets/images/tool-pic-stinky-fish.png"
            alt="stinky-fish"
          />
        </div>
      </div>
      <div className="second">
        <div className="tape-cut-img">
          <img src="/assets/images/tape-cut392.png" alt="tape" />
        </div>
        <div>
          <button type="button" className="product-button">
            <Link to="/">VIEW TOOL</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

ToolsItem.propTypes = {
  title: PropTypes.string,
  timeFrame: PropTypes.string,
  groupSize: PropTypes.string,
  description: PropTypes.string,
};

ToolsItem.defaultProps = {
  title: null,
  timeFrame: null,
  groupSize: null,
  description: null,
};
