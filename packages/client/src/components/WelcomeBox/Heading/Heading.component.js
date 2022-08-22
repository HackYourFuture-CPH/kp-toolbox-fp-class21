import PropTypes from 'prop-types';
import React from 'react';

export const Heading = ({ titleStart, titleName, titleEnd }) => {
  return (
    <h1 className="welcome-box-heading">
      {titleStart} <span>{titleName}</span> {titleEnd}
    </h1>
  );
};

Heading.propTypes = {
  titleStart: PropTypes.string,
  titleName: PropTypes.string,
  titleEnd: PropTypes.string,
};

Heading.defaultProps = {
  titleStart: 'Hello and welcome to the ',
  titleName: 'KAOSPILOT',
  titleEnd: ' toolbox !',
};
