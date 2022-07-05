import PropTypes from 'prop-types';
import React from 'react';

export const Heading = ({ title }) => {
  return <h1 className="welcome-box-heading">{title}</h1>;
};

Heading.propTypes = {
  title: PropTypes.string,
};

Heading.defaultProps = {
  title: 'Hello and welcome to the KAOSPILOT toolbox !',
};
