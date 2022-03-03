import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBA5MLU_BF_izugXkVe1ubeyzqHmxOHw2U',
  authDomain: 'musicapp-b670c.firebaseapp.com',
  projectId: 'musicapp-b670c',
  storageBucket: 'musicapp-b670c.appspot.com',
  appId: '1:1079269441130:web:a7bc8fa673292924ae9413',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
