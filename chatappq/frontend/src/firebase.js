// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxwUkBMIeUvduZZzXQHEtGJCe-Fq8TgUg",
  authDomain: "chatapp-d3424.firebaseapp.com",
  projectId: "chatapp-d3424",
  storageBucket: "chatapp-d3424.appspot.com",
  messagingSenderId: "839250672249",
  appId: "1:839250672249:web:f2ade07a43ac2e3af2b2a8",
  measurementId: "G-46DR0CK6RH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);