import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';

export const Main = ({ children, ...props }) => {
  return (
    <main>
      <div className="main-container">
        {children}
        <img
          className="kpImg"
          src="/assets/images/kp.png"
          alt=""
          width="1219.88px"
          height="597.86px"
        />
      </div>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
