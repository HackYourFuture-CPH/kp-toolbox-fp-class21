import React from 'react';
import './Footer.style.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content-section">
        <div>
          <Link to="/">
            <p className="logo-text">KAOSPILOT</p>
          </Link>
        </div>
        <div className="social-media-logo-container">
          <Link to="/">
            <img
              className="social-media-logo"
              src="/assets/vectors/vectorLinkedin.svg"
              alt="Linkedin-icon"
            />
          </Link>
          <Link to="/">
            <img
              className="social-media-logo"
              src="/assets/vectors/vectorInstagram.svg"
              alt="Instagram-icon"
            />
          </Link>
          <Link to="/">
            <img
              className="social-media-logo"
              src="/assets/vectors/vectorFacebook.svg"
              alt="Facebook-icon"
            />
          </Link>
        </div>
        <div className="placeholder-container">
          <p className="placeholder-text">DISCLAIMER PLACEHOLDER</p>
        </div>
      </div>
      <div className="footer-copyright-section">
        <div className="footer-copyright-infosection">Copyright info...</div>
      </div>
    </footer>
  );
};
