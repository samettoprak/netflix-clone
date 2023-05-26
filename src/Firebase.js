import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmMbhNEsWLeNctTCYLe7VZVpz7SZTSPjQ",
  authDomain: "netflix-clone-2e880.firebaseapp.com",
  projectId: "netflix-clone-2e880",
  storageBucket: "netflix-clone-2e880.appspot.com",
  messagingSenderId: "334604411966",
  appId: "1:334604411966:web:aa3e2ded99b5699b719d6f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
