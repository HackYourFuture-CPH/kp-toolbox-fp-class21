import React from 'react';
import './Page404.css';
import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
    <div className="page404-container">
      <div className="sky"> </div>
      <div className="sky-image"> </div>
      <div className="plane"> </div>
      <Link to="/">
        <div className="button"> BACK HOME </div>
      </Link>
    </div>
  );
};
