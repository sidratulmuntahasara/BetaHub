// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHeCLdjTmA8Y5q8f_OullnWS4CorIEs-A",
  authDomain: "betahub-ai.firebaseapp.com",
  projectId: "betahub-ai",
  storageBucket: "betahub-ai.appspot.com",
  messagingSenderId: "226120833718",
  appId: "1:226120833718:web:4c5bea87f908cb52f8e417",
  measurementId: "G-VK01KYTFPJ"
};

let auth;
let firestore;
let analytics;

if (typeof window !== "undefined") {
  // Initialize Firebase
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  auth = getAuth(app);
  firestore = getFirestore(app);  // Use 'firestore' instead of 'db'
  analytics = getAnalytics(app);
}

export { auth, firestore, analytics };
