import React from 'react';
import { Link } from 'react-router-dom';
import vectorFacebook from '../../../public/assets/vectors/vectorFacebook.svg';
import vectorInstagram from '../../../public/assets/vectors/vectorInstagram.svg';
import vectorLinkedin from '../../../public/assets/vectors/vectorLinkedin.svg';
import './SocialMediaLogo.style.css';

export const SocialMediaLogo = () => {
  return (
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
  );
};