// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhMTTg2KTfm4RtTOUdKkrN7U7j9rZNkJk",
  authDomain: "auth-jj.firebaseapp.com",
  projectId: "auth-jj",
  storageBucket: "auth-jj.appspot.com",
  messagingSenderId: "61044582802",
  appId: "1:61044582802:web:c5d55829f5fa0e8612b94b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);