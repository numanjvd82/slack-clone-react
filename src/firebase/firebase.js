import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB7y6NrDW9oNGlDttLi7qTWHnrbuCI6ReQ',
  authDomain: 'slack-clone-react-f1e17.firebaseapp.com',
  databaseURL: 'https://slack-clone-react-f1e17.firebaseio.com',
  projectId: 'slack-clone-react-f1e17',
  storageBucket: 'slack-clone-react-f1e17.appspot.com',
  messagingSenderId: '45329849720',
  appId: '1:45329849720:web:2c5e629db1fed130773c8d',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
