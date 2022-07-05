import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MobileNavigation } from '../MobileNavigation/MobileNavigation.component';
import './Navbar.css';

export const Navbar = ({ isLogedIn, userName, ...props }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <header className="navigation-bar">
      <div className="navigation-bar-container">
        <div className="logo">
          <Link to="/">
            <span>KAOSPILOT toolbox</span>
          </Link>
        </div>
        <nav className="navbar-links-container">
          <Link className="navbar-link" to="/about-toolbox">
            about toolbox
          </Link>
          <Link className="navbar-link" to="/contact-us">
            contact us
          </Link>

          <div className={`user-name-container ${!isLogedIn ? 'hide' : ''}`}>
            <Link className="navbar-link" to="/user-name">
              <img
                className="navbar-icon"
                src="/assets/vectors/vector-person-logged.svg"
                alt=""
              />
              <span> Hi, {userName}!</span>
            </Link>
          </div>
          <div className={`log-in-container ${isLogedIn ? 'hide' : ''}`}>
            <Link className="navbar-link" to="/log-in">
              <img
                className="navbar-icon"
                src="/assets/vectors/vector-person-not-logged.svg"
                alt=""
              />
              <span>sign in</span>
            </Link>
          </div>
          <div className={`log-out-container ${!isLogedIn ? 'hide' : ''}`}>
            <Link className="navbar-link" to="/log-out">
              <img
                className="navbar-icon"
                src="/assets/vectors/vector-log-out.svg"
                alt=""
              />
              <span>sign out</span>
            </Link>
          </div>
          <div className="favourite-container">
            <Link className="navbar-link" to="/favourites">
              <img
                className="navbar-icon"
                src={`${
                  !isLogedIn
                    ? '/assets/vectors/vector-favourites-empty-heart.svg'
                    : '/assets/vectors/vector-favourites-full-heart.svg'
                }`}
                alt=""
              />
              <span>favourites</span>
            </Link>
          </div>
          <button
            type="button"
            className={`mobile-open-btn ${isMobileNavOpen ? 'open' : ''}`}
            onClick={() => {
              setIsMobileNavOpen(!isMobileNavOpen);
            }}
          >
            {isMobileNavOpen ? <span>&times;</span> : <span>&#x2630;</span>}
          </button>
        </nav>
        <MobileNavigation open={isMobileNavOpen} />
      </div>
    </header>
  );
};

Navbar.propTypes = {
  isLogedIn: PropTypes.bool,
  userName: PropTypes.string,
};
Navbar.defaultProps = {
  isLogedIn: true,
  userName: 'Magdalena',
};
