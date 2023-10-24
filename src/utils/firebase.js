// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0j5YFQeNCGf7FzhBJxhUrmmJU2QtX50w",
  authDomain: "netflixgpt-a742e.firebaseapp.com",
  projectId: "netflixgpt-a742e",
  storageBucket: "netflixgpt-a742e.appspot.com",
  messagingSenderId: "887093524057",
  appId: "1:887093524057:web:22492d7f5c49db41f96348",
  measurementId: "G-1NPLXMBB75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
