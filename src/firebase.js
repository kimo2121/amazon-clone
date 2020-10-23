// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA5gzQNJIeqMV9DzU4z9htYbnv61jysG5I",
  authDomain: "clone-83549.firebaseapp.com",
  databaseURL: "https://clone-83549.firebaseio.com",
  projectId: "clone-83549",
  storageBucket: "clone-83549.appspot.com",
  messagingSenderId: "895457414988",
  appId: "1:895457414988:web:5840c330b13d6b778cc9e9",
  measurementId: "G-FS7PMPXW0G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
