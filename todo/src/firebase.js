import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC-lGpXHsHQpbA3MmoueJMPLbTodk7dIJk",
  authDomain: "todo-5ff1d.firebaseapp.com",
  databaseURL: "https://todo-5ff1d.firebaseio.com",
  projectId: "todo-5ff1d",
  storageBucket: "todo-5ff1d.appspot.com",
  messagingSenderId: "389033540563",
  appId: "1:389033540563:web:9fd1fcf5c8af87c3"
};

const firebaseApp = firebase.initializeApp(config);

const firestore = firebaseApp.firestore();

export default firestore;
