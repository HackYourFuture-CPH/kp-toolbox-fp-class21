import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MobileNavigation } from '../MobileNavigation/MobileNavigation.component';
import './Navbar.css';
import { UserAuth } from '../../firebase/AuthContext';
import { LoggedInUser } from './LoggedInUser.component';
import { GuestUser } from './GuestUser.component';

export const Navbar = ({ ...props }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { googleSignIn, logOut, user } = UserAuth();
  let accountStatus = null;
  if (user) {
    accountStatus = LoggedInUser(logOut, user);
  } else {
    accountStatus = GuestUser(googleSignIn);
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
            <Link
              className={`navbar-link ${!user ? 'disabled-link' : ''}`}
              to="/favourites"
            >
              <img
                className="navbar-icon"
                src={
                  !user
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
        <MobileNavigation
          open={isMobileNavOpen}
          handleMobile={setIsMobileNavOpen}
        />
      </div>
    </header>
  );
};
