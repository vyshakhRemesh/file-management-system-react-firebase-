// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import "firebase/compat/auth";
import { getAuth } from "firebase/auth";

console.log("firebase api key :", import.meta.env.VITE_FIREBASE_API_KEY);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "file-management-system-1f3a2.firebaseapp.com",
  projectId: "file-management-system-1f3a2",
  storageBucket: "file-management-system-1f3a2.firebasestorage.app",
  messagingSenderId: "488895974050",
  appId: "1:488895974050:web:10c9c3f7c96928b701a5fb",
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);

export const auth = getAuth(fire);
