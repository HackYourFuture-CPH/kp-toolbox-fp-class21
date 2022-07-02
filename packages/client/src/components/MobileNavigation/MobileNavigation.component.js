import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MobileNavigation.css';

export const MobileNavigation = (props) => {
  const isOpenClass = props.open
    ? 'mobile-navigation open'
    : 'mobile-navigation';
  return (
    <nav className={isOpenClass}>
      <Link to="/about-toolbox">about toolbox</Link>
      <Link to="/contact-us">contact us</Link>
    </nav>
  );
};
MobileNavigation.propTypes = {
  open: PropTypes.bool.isRequired,
};
