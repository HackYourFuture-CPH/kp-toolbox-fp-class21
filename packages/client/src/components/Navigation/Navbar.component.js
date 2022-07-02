import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MobileNavigation } from '../MobileNavigation/MobileNavigation.component';
import './Navbar.css';

export const Navbar = ({ isLogedIn, userName, ...props }) => {
  return (
    <header className="navigation-bar">
      <div className="navigation-bar-container">
        <div className="logo">
          <Link to="./">
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
            <span className="nav-icon-placeholder"> icon</span>
            <Link className="navbar-link" to="/user-name">
              Hi, {userName}!{' '}
            </Link>
          </div>
          <div className={`log-in-container ${isLogedIn ? 'hide' : ''}`}>
            <span className="nav-icon-placeholder"> icon</span>
            <Link className="navbar-link" to="/log-in">
              log In
            </Link>
          </div>
          <div className={`log-out-container ${!isLogedIn ? 'hide' : ''}`}>
            <span className="nav-icon-placeholder"> icon</span>
            <Link className="navbar-link" to="/log-out">
              log out
            </Link>
          </div>
          <div className="favourite-container">
            <span className="nav-icon-placeholder"> icon</span>
            <Link className="navbar-link" to="/favourites">
              favourites
            </Link>
          </div>
          <MobileNavigation />
        </nav>
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
