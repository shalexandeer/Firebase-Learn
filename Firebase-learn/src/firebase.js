// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2AvVpImcDY62Kqaw-7IX0YdmEpDxg5vY",
  authDomain: "fir-learn-69743.firebaseapp.com",
  projectId: "fir-learn-69743",
  storageBucket: "fir-learn-69743.appspot.com",
  messagingSenderId: "422541012821",
  appId: "1:422541012821:web:273c42f77d8c68320cc9dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firebase authentication and get a reference to the service
export const auth = getAuth(app)
export default app;