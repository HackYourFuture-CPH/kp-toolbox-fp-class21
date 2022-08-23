import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';

export const Main = ({ children, ...props }) => {
  return (
    <main>
      <div className="main-container">{children}</div>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
