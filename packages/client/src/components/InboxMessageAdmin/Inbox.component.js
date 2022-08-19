import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import './Inbox.style.css';
import { Link } from 'react-router-dom';
import getApiBaseUrl from '../../utils/getApiBaseURL';

export const Inbox = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getMessages() {
    const promise = fetch(`${getApiBaseUrl()}/api/contactUsForm`).then(
      (response) => response.json(),
    );
    return promise;
  }
  useEffect(() => {
    setIsLoading(true);
    getMessages().then((response) => {
      setMessages(response);
      setIsLoading(false);
    });
  }, []);

  const messagesToRender = isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      {messages.map((message, i) => {
        return (
          <div className="message-field">
            <p className="message-header uppercase-text">First name:</p>
            <p className="message-info">{message.first_name}</p>
            <p className="message-header uppercase-text">Surname:</p>
            <p className="message-info">{message.surname}</p>
            <p className="message-header uppercase-text">E-mail:</p>
            <p className="message-info">{message.email}</p>
            <p className="message-header uppercase-text">Message:</p>
            <p className="message-info">{message.message}</p>
          </div>
        );
      })}
    </>
  );

  return (
    <div className="inbox-wrapper">
      <div className="header-container-inbox">
        <p className="breadcrumbs-inbox">
          <Link to="/">
            <span className="uppercase-text">Kaospilot</span> toolbox
          </Link>
          /
          <Link to="/inbox-admin">
            <span className="uppercase-text"> Inbox</span>
          </Link>
        </p>
        <h1 className="uppercase-text header-text-inbox">Inbox</h1>
      </div>
      <div className="inbox-container">{messagesToRender}</div>
    </div>
  );
};
