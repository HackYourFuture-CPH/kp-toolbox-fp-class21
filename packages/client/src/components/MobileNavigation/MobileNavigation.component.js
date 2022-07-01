import React, { useState } from 'react';
import './MobileNavigation.css';

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  function openMobileNav() {
    setIsOpen(true);
  }
  function closeMobileNav() {
    setIsOpen(false);
  }
  return (
    <div
      className={`mobile-navigation-container ${
        isOpen ? 'mobile-navigation-container--opened' : ' '
      }`}
    >
      <button
        type="button"
        className="mobile-navbar-btn"
        onClick={openMobileNav}
      >
        icon
      </button>
      <div className="mobile-navbar-links-wrapper">
        <button
          type="button"
          className="mobile-navbar-btn"
          onClick={closeMobileNav}
        >
          icon
        </button>
        <nav className="mobile-navigation">
          <a href="/about-toolbox">about toolbox</a>
          <a href="/contact-us">contact us</a>
        </nav>
      </div>
    </div>
  );
};
