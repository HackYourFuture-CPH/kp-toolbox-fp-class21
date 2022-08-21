import React from 'react';
// import PropTypes from 'prop-types';
import './MessageHasBeenSent.style.css';
import { Link } from 'react-router-dom';

export const MessageHasBeenSent = () => {
  return (
    <div className="sent-message-container">
      <div className="sent-message-background">
        <div className="sent-message-text">
          <p>Your message has been sent. Thank you!</p>
          <p>We will get back to you as soon as we can.</p>
        </div>
        <Link to="/" className="view-tools-button uppercase-text" type="submit">
          View All Tools
        </Link>
      </div>
    </div>
  );
};
