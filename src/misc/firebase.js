import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA4sROK7KZs8DfSH54wwwAn6tyluBc3RAQ",
  authDomain: "chat-app-8624e.firebaseapp.com",
  databaseURL: "https://chat-app-8624e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-app-8624e",
  storageBucket: "chat-app-8624e.appspot.com",
  messagingSenderId: "534128498478",
  appId: "1:534128498478:web:1e06ae697b24c5205accbf"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const database = app.database();