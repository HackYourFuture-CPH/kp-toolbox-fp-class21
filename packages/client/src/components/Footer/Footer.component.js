import React from 'react';
import './Footer.style.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-bg">
        <div className="footer-container">
          <div className="copyright-disclaimer-container">
            <p>
              Find out more about KAOSPILOT and follow us on LinkedIn, Instagram
              and Facebook!
              <br />
              <br />
              Copyright Kaospilot. All methods & tools © their respective
              owners.
              <br />
              Are you an owner of a method or tool? Please contact us.
            </p>
          </div>
          <div className="links-container">
            <div>
              <Link to="/">
                <p className="logo-link-text">KAOSPILOT</p>
              </Link>
            </div>
            <div className="social-media-logo-container">
              <a href="https://www.linkedin.com/school/kaospilot/?originalSubdomain=dk">
                <img
                  className="social-media-logo"
                  src="/assets/vectors/vector-linked-in.svg"
                  alt="Linkedin-icon"
                />
              </a>
              <a href="https://www.instagram.com/kaospilot_denmark/">
                <img
                  className="social-media-logo"
                  src="/assets/vectors/vector-instagram.svg"
                  alt="Instagram-icon"
                />
              </a>
              <a href="https://www.facebook.com/Kaospilots/">
                <img
                  className="social-media-logo"
                  src="/assets/vectors/vector-facebook.svg"
                  alt="Facebook-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-black-bar" />
    </footer>
  );
};
