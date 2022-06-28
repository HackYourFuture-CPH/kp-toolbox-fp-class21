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
          <Link to="/log-In">log In</Link>
          <Link to="/favourites">favourites</Link>
        </nav>
      </div>
    </div>
  );
};
