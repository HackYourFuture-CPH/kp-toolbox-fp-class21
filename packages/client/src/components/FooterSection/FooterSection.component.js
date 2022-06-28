import React from 'react';
import PropTypes from 'prop-types';
import './FooterSection.style.css';
import { MainLogo } from '../MainLogo/MainLogo.component'
import { SocialMediaLogo } from '../SocialMediaLogo/SocialMediaLogo.component';
import { Disclaimer } from '../Disclaimer/Disclaimer.component';

export const FooterSection = ({ size }) => {
  return (
    <footer className="footerSection">
      <section className="footerContentSection">
        <MainLogo />
        <SocialMediaLogo />
        <Disclaimer />
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