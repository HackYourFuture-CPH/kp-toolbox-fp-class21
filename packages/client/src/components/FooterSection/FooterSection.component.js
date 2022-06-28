import React from 'react';
import PropTypes from 'prop-types';
import './FooterSection.style.css';
import { Link } from "react-router-dom";
import vectorFacebook from '../../../public/assets/vectors/vectorFacebook.svg';
import vectorInstagram from '../../../public/assets/vectors/vectorInstagram.svg';
import vectorLinkedin from '../../../public/assets/vectors/vectorLinkedin.svg';

export const FooterSection = ({ size }) => {
  return (
    <footer className="footerSection">
      <section className="footerContentSection">
      <section>
      <Link to="/">
        <p className="logo-text">KAOSPILOT</p>
      </Link>
    </section>
    <section className="social-media-logo-container">
      <Link to="/">
        <img
          className="social-media-logo"
          src={vectorLinkedin}
          alt="Linkedin-icon"
        />
      </Link>
      <Link to="/">
        <img
          className="social-media-logo"
          src={vectorInstagram}
          alt="Instagram-icon"
        />
      </Link>
      <Link to="/">
        <img
          className="social-media-logo"
          src={vectorFacebook}
          alt="Facebook-icon"
        />
      </Link>
    </section>
        <div className="placeholder-container">
        <p className="placeholder-text">DISCLAIMER PLACEHOLDER</p>
        </div>
      </section>
      <section className="footerCopyrightSection">
        <div className="footerCopyrightInfoSection">Copyright info...</div>
      </section>
    </footer>
  );
};

FooterSection.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

FooterSection.defaultProps = {
  size: 'small',
};