import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './DeleteToolConfirmation.style.css';
import getApiBaseUrl from '../../utils/getApiBaseURL';
import { UserAuth } from '../../firebase/AuthContext';

export const DeleteConfirmation = () => {
  const location = useLocation();
  const { id } = location.state;
  const { user } = UserAuth();
  function deleteToolByFetch() {
    fetch(`${getApiBaseUrl()}/admin/tools/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    }).then((res) => {
      if (res.ok) {
        // eslint-disable-next-line
        alert('success!!  deleted');
      }
      // eslint-disable-next-line
      alert(`Error deleting ${res.status}`);
    }); // eslint-disable-next-line no-console
    console.log('deletebyfetch');
  }
  const handleDelete = (e) => {
    // eslint-disable-next-line no-console
    console.log('handleDelete');
    e.preventDefault();
    deleteToolByFetch();
  };
  return (
    <>
      <h1>Delete the tool is non-reversible, click DELETE to confirm. </h1>
      <div className="delete-tool-confirmation-button-container">
        <button
          type="button"
          onClick={handleDelete}
          className="confirm-delete-tool-button"
        >
          DELETE
        </button>
        <button type="button" className="cancel-ddelete-tool-button">
          <Link to="/">CANCEL</Link>
        </button>
      </div>
    </>
  );
};
