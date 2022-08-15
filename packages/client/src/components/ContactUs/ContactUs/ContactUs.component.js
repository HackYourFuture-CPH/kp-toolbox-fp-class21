import React, { useState, useRef } from 'react';
import './ContactUs.style.css';
import { Link } from 'react-router-dom';
import getApiBaseUrl from '../../../utils/getApiBaseURL';
import { MessageHasBeenSent } from '../MessageHasBeenSent/MessageHasBeenSent.component';

export const ContactUs = () => {
  const initialValues = { firstname: '', surname: '', email: '', message: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState('');
  const [status, setStatus] = useState('Submit');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isFilled, setIsFilled] = useState(true);

  const firstnameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const setFocus = (inputValues) => {
    if (inputValues.firstname === '') {
      firstnameRef.current.focus();
    } else if (inputValues.email === '') {
      emailRef.current.focus();
    } else if (inputValues.message === '') {
      messageRef.current.focus();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    if (
      formValues.firstname === '' ||
      formValues.email === '' ||
      formValues.message === ''
    ) {
      e.preventDefault();
      setFormError('Please fill in the required fields!');
      setIsFilled(false);
      setFocus(formValues);
    } else {
      e.preventDefault();
      const details = {
        first_name: formValues.firstname,
        surname: formValues.surname,
        email: formValues.email,
        message: formValues.message,
      };
      try {
        setStatus('Sending...');
        const response = await fetch(`${getApiBaseUrl()}/api/contactUsForm`, {
          method: 'POST',
          headers: { 'Content-Type': 'Application/json' },
          body: JSON.stringify(details),
        });
        if (response.ok) {
          setIsSubmit(true);
        } else {
          setFormError(
            `Sorry! You cannot send message due to ${response.status} error.`,
          );
          return;
        }
      } catch (error) {
        setFormError(error);
      }
    }
  };

  return (
    <div className="contact-us-wrapper">
      <div className="header-container-contact-us">
        <p className="breadcrumbs">
          <Link to="/">
            <span className="uppercase-text">Kaospilot</span> toolbox{' '}
          </Link>
          /
          <Link to="/contact-us">
            <span className="uppercase-text"> Contact Us</span>
          </Link>
        </p>
        <h1 className="uppercase-text header-text">Contact Kaospilot</h1>
      </div>
      {isSubmit ? (
        <MessageHasBeenSent />
      ) : (
        <div className="form-field-wrapper">
          <form
            className="form-container"
            method="POST"
            onSubmit={handleSubmit}
          >
            <label className="float-label-input-field">
              <input
                className="input-field"
                type="text"
                value={formValues.firstname}
                placeholder="first name"
                onChange={handleChange}
                name="firstname"
                ref={firstnameRef}
              />
              <span className="placeholder-text star-input-required">
                first name
              </span>
            </label>
            <label className="float-label-input-field input-gap">
              <input
                className="input-field"
                type="text"
                placeholder="surname"
                value={formValues.surname}
                onChange={handleChange}
                name="surname"
              />
              <span className="placeholder-text">last name</span>
            </label>
            <label className="float-label-input-field">
              <input
                className="input-field"
                type="email"
                patter="/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i"
                placeholder="e-mail"
                value={formValues.email}
                onChange={handleChange}
                name="email"
                ref={emailRef}
              />
              <span className="placeholder-text star-input-required">
                e-mail
              </span>
            </label>
            <label className="float-label-input-field income-message-field">
              <textarea
                className="input-field"
                placeholder="your message"
                value={formValues.message}
                onChange={handleChange}
                name="message"
                rows="4"
                ref={messageRef}
              />
              <span className="placeholder-text star-input-required">
                message
              </span>
            </label>
            {!isFilled && (
              <>
                <p className="validation-text">{formError}</p>
                <button
                  className="submit-button uppercase-text"
                  type="submit"
                  disabled
                  onSubmit={handleSubmit}
                >
                  {status}
                </button>{' '}
              </>
            )}
            {isFilled && (
              <button
                className="submit-button uppercase-text"
                type="submit"
                onSubmit={handleSubmit}
              >
                {status}
              </button>
            )}
          </form>
        </div>
      )}
    </div>
  );
};
