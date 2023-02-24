import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore/lite';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut
 } from '@firebase/auth'

  const firebaseConfig = {
    apiKey: "AIzaSyCYb9lP8bxTRIB6pQlMiOrU4dEUC3dhy0Q",
    authDomain: "notflix-26ca8.firebaseapp.com",
    projectId: "notflix-26ca8",
    storageBucket: "notflix-26ca8.appspot.com",
    messagingSenderId: "505704221039",
    appId: "1:505704221039:web:0b79a831846a15e655c09a"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const auth = getAuth()


  export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut}
  export default db