// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
      })
    });
  });