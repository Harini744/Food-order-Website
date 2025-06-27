import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDEV61VYKnq4V6iWU19qsCq9wNIoWyQpgY",
  authDomain: "react-project-15968.firebaseapp.com",
  projectId: "react-project-15968",
  storageBucket: "react-project-15968.firebasestorage.app",
  messagingSenderId: "568833904683",
  appId: "1:568833904683:web:a9b79ba8cacb1a33fe9a6e",
  measurementId: "G-257JMMZ817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
const analytics = getAnalytics(app);