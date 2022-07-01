import React from 'react';
import './Card.style.css';
import { Link } from 'react-router-dom';

export const Card = () => {
  return (
    <div className="product-card-container">
      <div className="toolbox-top">
        <div className="icons-container">
          <div className="category-icon-bar">
            <div className="category-icon">C1</div>
            <div className="category-icon">C2</div>
            <div className="category-icon">C3</div>
            <div className="category-icon">C4</div>
            <div className="category-icon">C5</div>
            <div className="category-icon">C6</div>
          </div>
          <div className="category-image">img</div>
        </div>
        <div className="toolbox-category-bar">
          <p className="toolbox-category-text">
            Team Development & Collaboration // Action & Decision Making //
            Meeting & Facilitation
          </p>
        </div>
      </div>
      <div className="toolbox-title-container">
        <h6 className="product-title">STINKY FISH</h6>
        <span className="product-description">
          share fears, anxieties and uncertainties related to the program
          <br />
          theme to create openness within a group.
        </span>
        <div className="toolbox-gradient">
          <div className="toolbox-gradient-container">
            <div className="container-participants">
              <div className="toolbox-gradient-img">img</div>
              <div className="toolbox-gradient-participants">5-10</div>
            </div>
            <div className="container-time">
              <div className="toolbox-gradient-img">img</div>
              <div className="toolbox-gradient-participants">1-4</div>
            </div>
          </div>
          <div className="toolbox-gradient-placeholder">Placeholder</div>
        </div>
      </div>
      <div className="tape-cut-img">
        <img src="/assets/images/tape-cut392.png" alt="tape" />
      </div>
      <div>
        <button type="button" className="product-button-view">
          <Link to="/">VIEW TOOL</Link>
        </button>
      </div>
    </div>
  );
};