import React from 'react';
import './Navbar.css';

export function LoggedInUser(logOut, user) {
  return (
    <div className="log-out-container">
      <div className="user-name-container">
        <img
          className="navbar-icon"
          src="/assets/vectors/vector-person-logged.svg"
          alt="icon with person for user name in logged-in state"
        />
        <span> Hi, {user.displayName}!</span>
      </div>
      <button type="button" className="navbar-button" onClick={logOut}>
        <img
          className="navbar-icon"
          src="/assets/vectors/vector-log-out.svg"
          alt="icon with person for logged-in state"
        />
        <span>sign out</span>
      </button>
    </div>
  );
}
