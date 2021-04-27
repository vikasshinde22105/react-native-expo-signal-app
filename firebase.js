import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBA8blCX-kKisZNvqhY2yPR5vTuMHHNtzw",
    authDomain: "signal-clone-yt-build-a0eb9.firebaseapp.com",
    projectId: "signal-clone-yt-build-a0eb9",
    storageBucket: "signal-clone-yt-build-a0eb9.appspot.com",
    messagingSenderId: "164593947187",
    appId: "1:164593947187:web:0bb132bd6bdfee9d4f4946"
};
let app;
if (firebase.apps.length === 0) {
   app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
 }
const db = app.firestore();
const auth = firebase.auth();

export { db, auth};