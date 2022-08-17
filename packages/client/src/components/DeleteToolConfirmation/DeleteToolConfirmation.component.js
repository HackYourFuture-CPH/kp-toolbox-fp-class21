import React from 'react';
import { Link } from 'react-router-dom';

export const DeleteConfirmation = () => {
  return (
    <>
      <h1>Delete the tool is non-reversible, click confirm to DELETE. </h1>
      <div className="delete-tool-confirmation-button-container">
        <button type="button" className="confirm-delete-tool-button">
          <Link to="/about-toolbox">CONFIRM</Link>
        </button>
        <button type="button" className="cancel-ddelete-tool-button">
          <Link to="/">CANCEL</Link>
        </button>
      </div>
    </>
  );
};
