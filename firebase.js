// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7DYzZMJc04xep8HwE6Txqwfz00Dbwvw0",
  authDomain: "ayaara-ec37e.firebaseapp.com",
  projectId: "ayaara-ec37e",
  storageBucket: "ayaara-ec37e.firebasestorage.app",
  messagingSenderId: "955592891459",
  appId: "1:955592891459:web:6fa2a0bcfa1b681d52c8f6",
  measurementId: "G-HDNVST4MFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);