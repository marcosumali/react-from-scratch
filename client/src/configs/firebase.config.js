import * as firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAwPoiGlhW5eaCOYjE87TMUGTNsCcGXFME",
  authDomain: "tplaza-apps.firebaseapp.com",
  databaseURL: "https://tplaza-apps.firebaseio.com",
  projectId: "tplaza-apps",
  storageBucket: "tplaza-apps.appspot.com",
  messagingSenderId: "779050731626",
  appId: "1:779050731626:web:e9beecd1468ba7b89ba213"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;