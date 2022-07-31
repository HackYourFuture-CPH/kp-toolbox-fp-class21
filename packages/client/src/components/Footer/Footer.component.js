import React from 'react';
import './Footer.style.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-bg">
        <div className="footer-container">
          <div className="copyright-disclaimer-container">
            <p className="copyright-disclaimer-text">
              Copyright Kaospilot. All methods & tools © their respective
              owners.
            </p>
            <p className="copyright-disclaimer-text">
              Are you an owner to a method/tool, please
              <Link
                to="#"
                onClick={(e) => {
                  window.location.href = 'mailto:no-reply@example.com';
                  e.preventDefault();
                }}
              >
                contact us
              </Link>
              .
            </p>
          </div>
          <div className="find-information-container">
            <p className="find-information-text">
              Find out more about KAOSPILOT and follow us on LinkedIn, Instagram
              and Facebook!
            </p>
          </div>
          <div className="links-container">
            <div>
              <Link to="/">
                <p className="logo-link-text">KAOSPILOT</p>
              </Link>
            </div>
            <div className="social-media-logo-container">
              <Link to="/">
                <img
                  className="social-media-logo"
                  src="/assets/vectors/vector-linked-in.svg"
                  alt="Linkedin-icon"
                />
              </Link>
              <Link to="/">
                <img
                  className="social-media-logo"
                  src="/assets/vectors/vector-instagram.svg"
                  alt="Instagram-icon"
                />
              </Link>
              <Link to="/">
                <img
                  className="social-media-logo"
                  src="/assets/vectors/vector-facebook.svg"
                  alt="Facebook-icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-rectangle-background" />
    </footer>
  );
};
