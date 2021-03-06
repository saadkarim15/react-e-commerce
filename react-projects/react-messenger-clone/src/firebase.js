import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAWy-tBA_Xy_oPEU-VP4e8B4lkANoVqSd8",
  authDomain: "messenger-clone-fd650.firebaseapp.com",
  databaseURL: "https://messenger-clone-fd650.firebaseio.com",
  projectId: "messenger-clone-fd650",
  storageBucket: "messenger-clone-fd650.appspot.com",
  messagingSenderId: "68076969327",
  appId: "1:68076969327:web:d151e73ca97e6b7139dc9a",
  measurementId: "G-6GJSH5Z7XN",
});

const db = firebaseApp.firestore();

export default db;
