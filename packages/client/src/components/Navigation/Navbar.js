import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="navigation-bar">
      <div className="logo">
        <span>KAOSPILOT toolbox</span>
      </div>
      <div className="navbar-links">
        <li>about toolbox</li>
        <li>contact us</li>
        <li>log In</li>
        <li>favourites</li>
      </div>
    </div>
  );
};
