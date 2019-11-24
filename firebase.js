import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDvjlsxIL1XMdHjBt0hVprQV59fllNum1c",
  authDomain: "letro-porto.firebaseapp.com",
  databaseURL: "https://letro-porto.firebaseio.com",
  projectId: "letro-porto",
  storageBucket: "letro-porto.appspot.com",
  messagingSenderId: "116847308133",
  appId: "1:116847308133:web:f3530197345e4a0d23c58c",
  measurementId: "G-JZ33SQLXTN",
});

export { firebaseConfig as firebase };
