import {
  React,
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
