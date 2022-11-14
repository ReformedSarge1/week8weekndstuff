import { initializeApp } from "firebase/app";
import { getFirestore, query, getDocs, collection, where, addDoc, } from 'firebase/firestore';
// import {getAuth, signInWithEmailAndPassword, signOut, } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCvTLDxawlHb7-br0dqY0JhlM_Zk9jkMuw",
    authDomain: "ecommerce-20585.firebaseapp.com",
    projectId: "ecommerce-20585",
    storageBucket: "ecommerce-20585.appspot.com",
    messagingSenderId: "447761026280",
    appId: "1:447761026280:web:3fb06d3b8b7cc72e210d5d",
    measurementId: "G-M00DPF8NQ9"
  };
  

  const app = initializeApp(firebaseConfig);
  // export const auth = getAuth(app);
  // export const signin = signInWithEmailAndPassword(app);
  // export const signout = signOut(app)
  export const db = getFirestore(app);
