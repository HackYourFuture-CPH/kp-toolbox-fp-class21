import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'class21-fp-toolbox.firebaseapp.com',
  projectId: 'class21-fp-toolbox',
  storageBucket: 'class21-fp-toolbox.appspot.com',
  messagingSenderId: '860495811939',
  appId: '1:860495811939:web:4243fd35860ef066712f56',
  measurementId: 'G-SLW94NRRR7',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
