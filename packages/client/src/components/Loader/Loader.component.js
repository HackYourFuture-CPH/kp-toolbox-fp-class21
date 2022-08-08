import React from 'react';
import './Loader.style.css';

export const Loader = () => {
  return (
    <div className="loader-container">
      <span>Loading tool...</span>
      <div className="lds-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
