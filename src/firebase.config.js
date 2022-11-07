import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDo7hUiC6sxQLiY8Bx9WyQ2-3TWHVxzYS8',
  authDomain: 'time-logger-4aff3.firebaseapp.com',
  databaseURL: 'https://time-logger-4aff3-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'time-logger-4aff3',
  storageBucket: 'time-logger-4aff3.appspot.com',
  messagingSenderId: '524536893954',
  appId: '1:524536893954:web:6ab87ce14337582067cd1b',
  measurementId: 'G-XRZY0GM207',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
