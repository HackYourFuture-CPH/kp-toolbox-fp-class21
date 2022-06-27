import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="navigation-bar">
      <nav>
        <div className="logo">
          <span>KAOSPILOT toolbox</span>
        </div>
        <div className="navbar-links">
          <li>About toolbox</li>
          <li>Contact us</li>
          <li>Log In</li>
          <li>Favourites</li>
        </div>
      </nav>
    </div>
  );
};
