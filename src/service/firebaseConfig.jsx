// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxkjeZQVYhQw1LumL6x3M2NPvz7B5X7JM",
  authDomain: "ai-travel-planner-938c6.firebaseapp.com",
  projectId: "ai-travel-planner-938c6",
  storageBucket: "ai-travel-planner-938c6.firebasestorage.app",
  messagingSenderId: "1087527506691",
  appId: "1:1087527506691:web:43a5de65a9032418848f36",
  measurementId: "G-PMSFQVF55Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);