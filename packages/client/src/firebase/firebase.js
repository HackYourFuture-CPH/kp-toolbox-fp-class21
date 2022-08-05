import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyARcKPPTVo1aqOCnH-_QAf8rnt3LyUyArY',
  authDomain: 'class21-fp-toolbox.firebaseapp.com',
  projectId: 'class21-fp-toolbox',
  storageBucket: 'class21-fp-toolbox.appspot.com',
  messagingSenderId: '860495811939',
  appId: '1:860495811939:web:4243fd35860ef066712f56',
  measurementId: 'G-SLW94NRRR7',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const { user } = result;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const { email } = error.customData;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};
