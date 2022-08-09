import React, {
  useEffect,
  useContext,
  createContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from './firebase';
import PropTypes from 'prop-types';
import getApiBaseUrl from '../utils/getApiBaseURL';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const googleSignIn = useCallback(() => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const { userInfo } = result;
        return credential;
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const { email } = error.customData;
        // const credential = GoogleAuthProvider.credentialFromError(error);
        return error;
      });
  }, []);

  const logOut = useCallback(() => {
    signOut(auth);
    navigate('/');
  }, [navigate]);

  function addUser(authUser) {
    fetch(`${getApiBaseUrl()}/api/users`, {
      method: 'POST',
      body: JSON.stringify({
        name: authUser.displayName,
        email: authUser.email,
        firebase_id: authUser.uid,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((result) => {
      if (!result.ok) {
        return Promise.reject(result.error);
      }
    });
  }

  useEffect(() => {
    function checkUserExist(authUser) {
      fetch(`${getApiBaseUrl()}/api/users/${authUser.uid}`)
        .then((response) => response.json())
        .then((result) => {
          if (result.length === 0) {
            addUser(authUser);
          }
        });
    }
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        checkUserExist(currentUser);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const contextValues = useMemo(
    () => ({ googleSignIn, logOut, user }),
    [googleSignIn, logOut, user],
  );

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

AuthContextProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

AuthContextProvider.defaultProps = {
  children: PropTypes.arrayOf(PropTypes.element),
};
