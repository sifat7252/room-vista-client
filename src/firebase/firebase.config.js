// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIGNQ23Mw5whQ7SRACWQL1ttaaZNU4fJY",
  authDomain: "auth-room-vista.firebaseapp.com",
  projectId: "auth-room-vista",
  storageBucket: "auth-room-vista.appspot.com",
  messagingSenderId: "791588465060",
  appId: "1:791588465060:web:26c72a19c95dce23eb7931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;