import React from 'react';
import './ToolsItem.style.css';
import { Link } from 'react-router-dom';

export const ToolsItem = () => {
  return (
    <div className="product-card-container">
      <div className="first">
        <div className="favourites-icon">
          <img
            src="/assets/vectors/Vector-favourites.png"
            alt="favourites-icon"
          />
        </div>
        <div className="icon-container">
          <div className="container-participants">
            <div className="toolbox-img">i</div>
            <div className="toolbox-participants">5-10</div>
          </div>
          <div className="container-time">
            <div className="toolbox-img">i</div>
            <div className="toolbox-participants">1-4</div>
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
          <span className="product-description">
            share fears, anxieties and uncertainties related to the program
            <br />
            theme to create openness within a group.
          </span>
          <h6 className="product-title">STINKY FISH</h6>
        </div>
        <div className="title-image">
          <img
            src="/assets/vectors/tool-pic-stinky-fish.png"
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
