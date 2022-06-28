import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faArrowRightFromBracket,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <div className="navigation-bar">
      <div className="navigation-bar-container">
        <div className="logo">
          <Link to="./">
            <span>KAOSPILOT toolbox</span>
          </Link>
        </div>
        <nav className="navbar-links">
          <Link to="/about-toolbox">about toolbox</Link>
          <Link to="/contact-us">contact us</Link>
          <Link to="/user-name">
            <FontAwesomeIcon icon={faUser}> </FontAwesomeIcon>
            Hi, name
          </Link>
          <Link to="/log-in">
            <FontAwesomeIcon icon={faUser}> </FontAwesomeIcon>
            log In
          </Link>
          <Link to="/log-out">
            <FontAwesomeIcon icon={faArrowRightFromBracket}> </FontAwesomeIcon>
            log out
          </Link>
          <Link to="/favourites">
            <FontAwesomeIcon icon={faHeart}> </FontAwesomeIcon>
            favourites
          </Link>
        </nav>
      </div>
    </div>
  );
};
