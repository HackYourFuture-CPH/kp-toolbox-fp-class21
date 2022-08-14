import React from 'react';
import './Navbar.css';

export function GuestUser(googleSignIn) {
  return (
    <div className="log-in-container">
      <button type="button" className="navbar-button" onClick={googleSignIn}>
        <img
          className="navbar-icon"
          src="/assets/vectors/vector-person-not-logged.svg"
          alt="icon with person for logged-out state"
        />
        <span>sign in</span>
      </button>
    </div>
  );
}
