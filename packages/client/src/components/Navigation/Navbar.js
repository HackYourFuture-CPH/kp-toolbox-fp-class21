import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

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

          <div className="user-name-container">
            <span className="nav-icon-placeholder"> icon</span>
            <Link to="/user-name">Hi, name</Link>
          </div>
          <div className="log-in-container">
            <span className="nav-icon-placeholder"> icon</span>
            <Link to="/log-in">log In</Link>
          </div>
          <div className="log-out-container">
            <span className="nav-icon-placeholder"> icon</span>
            <Link to="/log-out">log out</Link>
          </div>
          <div className="favourite-container">
            <span className="nav-icon-placeholder"> icon</span>
            <Link to="/favourites">favourites</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
