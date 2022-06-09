import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7P-TV8UOwXPKXjiEz7Q2-rWkqma5p8Cg",
  authDomain: "hachathon1.firebaseapp.com",
  projectId: "hachathon1",
  storageBucket: "hachathon1.appspot.com",
  messagingSenderId: "213132951343",
  appId: "1:213132951343:web:0d32bb3a7799cb14052bda",
  measurementId: "G-7GXR9PSSE8",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
