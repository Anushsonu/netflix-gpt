// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7hoC-Exz8NWcjs3rhTGw4viXLAie6FC4",
  authDomain: "netflix-gpt-4e3fb.firebaseapp.com",
  projectId: "netflix-gpt-4e3fb",
  storageBucket: "netflix-gpt-4e3fb.appspot.com",
  messagingSenderId: "150249927943",
  appId: "1:150249927943:web:a43a8dcdb228bffb85c1a2",
  measurementId: "G-GXTY857BQ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
