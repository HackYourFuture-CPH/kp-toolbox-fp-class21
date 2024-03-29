import React, { useEffect, useState } from 'react';
import './Inbox.style.css';
import { Link } from 'react-router-dom';
import getApiBaseUrl from '../../utils/getApiBaseURL';
import { UserAuth } from '../../firebase/AuthContext';

export const Inbox = () => {
  const { user } = UserAuth();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${getApiBaseUrl()}/admin/inbox-admin`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setMessages(response);
        setIsLoading(false);
      });
  }, [user.accessToken]);

  if (!user) {
    return null;
  }

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
