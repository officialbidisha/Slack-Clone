// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXazYYdYyiJWHRrciCam9_-QCWE197Y00",
  authDomain: "slack-clone-f4d7f.firebaseapp.com",
  projectId: "slack-clone-f4d7f",
  storageBucket: "slack-clone-f4d7f.appspot.com",
  messagingSenderId: "603771737082",
  appId: "1:603771737082:web:01d9e9d06c247fe1b60a43"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export {db, auth, provider, firebaseApp};