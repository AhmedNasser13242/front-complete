import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/database";
// import "firebase/compat/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdi0qF2PYDoHhtqxIVvTyK-KilDO97N30",
  authDomain: "ecommerce-72c8f.firebaseapp.com",
  databaseURL:
    "https://ecommerce-72c8f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecommerce-72c8f",
  storageBucket: "ecommerce-72c8f.appspot.com",
  messagingSenderId: "617490453289",
  appId: "1:617490453289:web:4808bbd8dc2d7c4b729d38",
};

// initialize firebase app
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
