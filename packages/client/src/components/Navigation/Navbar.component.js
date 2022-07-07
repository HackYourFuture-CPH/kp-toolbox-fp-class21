import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MobileNavigation } from '../MobileNavigation/MobileNavigation.component';
import './Navbar.css';

export const Navbar = ({ isLogedIn, userName, ...props }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  let accountStatus = null;

  if (isLogedIn) {
    accountStatus = (
      <div className="log-out-container">
        <div className="user-name-container">
          <img
            className="navbar-icon"
            src="/assets/vectors/vector-person-logged.svg"
            alt="icon with person for user name in logged-in state"
          />
          <span> Hi, {userName}!</span>
        </div>
        <Link className="navbar-link" to="/sign-out">
          <img
            className="navbar-icon"
            src="/assets/vectors/vector-log-out.svg"
            alt="icon with person for logged-in state"
          />
          <span>sign out</span>
        </Link>
      </div>
    );
  } else {
    accountStatus = (
      <div className="log-in-container">
        <Link className="navbar-link" to="/sign-in">
          <img
            className="navbar-icon"
            src="/assets/vectors/vector-person-not-logged.svg"
            alt="icon with person for logged-out state"
          />
          <span>sign in</span>
        </Link>
      </div>
    );
  }

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
          {accountStatus}
          <div className="favourite-container">
            <Link className="navbar-link" to="/favourites">
              <img
                className="navbar-icon"
                src={
                  !isLogedIn
                    ? '/assets/vectors/vector-favourites-empty-heart.svg'
                    : '/assets/vectors/vector-favourites-full-heart.svg'
                }
                alt="heart icon for favourites link"
              />
              <span>favourites</span>
            </Link>
          </div>
          <button
            type="button"
            className={`mobile-open-button ${isMobileNavOpen ? 'open' : ''}`}
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
  isLogedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
};
