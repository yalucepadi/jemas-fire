// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxnLcnw9PYt5WFFyhitaKABZLas7vqyyI",
  authDomain: "jemas-90f83.firebaseapp.com",
  projectId: "jemas-90f83",
  storageBucket: "jemas-90f83.firebasestorage.app",
  messagingSenderId: "564567215682",
  appId: "1:564567215682:web:eda0a516a22d81f685e7db",
  measurementId: "G-7CJ8RN6B2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);