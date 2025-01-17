import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAi_pt-4sueJbZ9XJbHRl5Siq3ET1JXz4U",
    authDomain: "real-estate-e2c2e.firebaseapp.com",
    projectId: "real-estate-e2c2e",
    storageBucket: "real-estate-e2c2e.firebasestorage.app",
    messagingSenderId: "28479823972",
    appId: "1:28479823972:web:f9a85ea146b8c05f027f71",
    measurementId: "G-KMMG6Z8XNE"
  };
  

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

const storage = getStorage();

export {
    auth,
    provider,
    db,
    storage,
};
