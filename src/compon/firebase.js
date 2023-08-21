// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app"; 
import { getAnalytics } from "firebase/analytics"; 
import firebase from 'firebase/compat/app' 
import "firebase/compat/auth"; 
import "firebase/compat/firestore"; 
 
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  onAuthStateChanged, 
} from "firebase/auth"; 
import { getFirestore, doc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjLHFtl2rcNrKr0nKk3hW15D3qx4BmVJY",
    authDomain: "fronn1-c5489.firebaseapp.com",
    projectId: "fronn1-c5489",
    storageBucket: "fronn1-c5489.appspot.com",
    messagingSenderId: "722091311867",
    appId: "1:722091311867:web:3d3369a360e6f6472e665e"
  };

  firebase.initializeApp(firebaseConfig); 
  export const firestore = firebase.firestore(); 
  // Initialize Firebase 
  export const app = initializeApp(firebaseConfig); 
  const analytics = getAnalytics(app); 
  export const db = getFirestore(app) 
   
  export default firebase