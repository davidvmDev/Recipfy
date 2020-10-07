import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCGWNmcELWe3p5Bosq1NAkwYzgyow61yEc",
  authDomain: "recipfy-react.firebaseapp.com",
  databaseURL: "https://recipfy-react.firebaseio.com",
  projectId: "recipfy-react",
  storageBucket: "recipfy-react.appspot.com",
  messagingSenderId: "644187319295",
  appId: "1:644187319295:web:ebf3135e1705dd1c4015ca",
  measurementId: "G-DNHHMMRZWS",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
