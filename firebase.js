// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
if (typeof window !== "undefined"){
  // Initialize Firebase
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  auth = getAuth(app);
  firestore = getFirestore(app);
  analytics = getAnalytics(app);
}

export {auth, firestore, analytics}