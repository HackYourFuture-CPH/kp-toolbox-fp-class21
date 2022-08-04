import React from 'react';
import PropTypes from 'prop-types';
import './FilteringArea.css';

export const FilteringArea = ({ children }) => {
  return <section className="filtering-area">{children}</section>;
};

FilteringArea.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
