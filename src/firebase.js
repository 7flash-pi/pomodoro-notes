
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZIB9_DLrAf-idKNkVCmEIxhCLXbpE6I8",
  authDomain: "pomodoro-notws.firebaseapp.com",
  projectId: "pomodoro-notws",
  storageBucket: "pomodoro-notws.appspot.com",
  messagingSenderId: "520149168693",
  appId: "1:520149168693:web:c6aecbda935e824a75f77c",
  measurementId: "G-HJBM6WSL94"
};

const app = initializeApp(firebaseConfig);

const db= getFirestore(app);

export default db;
