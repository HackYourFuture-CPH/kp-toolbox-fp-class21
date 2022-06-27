import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="navigation-bar">
      <div className="logo">
        <Link to="./">
          <span>KAOSPILOT toolbox</span>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/about-toolbox">
          <li>about toolbox</li>
        </Link>
        <Link to="./contact-us">
          <li>contact us</li>
        </Link>
        <Link to="./log-In">
          <li>log In</li>
        </Link>
        <Link to="./favourites">
          <li>favourites</li>
        </Link>
      </div>
    </div>
  );
};
