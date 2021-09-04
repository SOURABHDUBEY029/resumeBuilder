import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCij4r8hEp19uzrAHgWg9TFW5ykxKioSqE",
    authDomain: "resume-builder-89e38.firebaseapp.com",
    projectId: "resume-builder-89e38",
    storageBucket: "resume-builder-89e38.appspot.com",
    messagingSenderId: "82755660759",
    appId: "1:82755660759:web:8600da0931b1d457ca3992"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();