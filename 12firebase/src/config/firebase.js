// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC0bO3KCKh0jRgQg1CzVA7QrtnRERTStl0",
  authDomain: "fir-beginner-24192.firebaseapp.com",
  projectId: "fir-beginner-24192",
  storageBucket: "fir-beginner-24192.firebasestorage.app",
  messagingSenderId: "113565801576",
  appId: "1:113565801576:web:dc0d38aecb29e7a45fafdd",
  measurementId: "G-8NGPMMRNVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)