// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7V7yANzvlbS6Lbp5vKkMbKLncc3bOTo8",
  authDomain: "netflix-clone-ac377.firebaseapp.com",
  projectId: "netflix-clone-ac377",
  storageBucket: "netflix-clone-ac377.appspot.com",
  messagingSenderId: "523420461655",
  appId: "1:523420461655:web:cc492835eab16e671f5112",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
