// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVLFzvnrssWXRd177zb5iiGIH26XcdXqo",
  authDomain: "netflixgpt-7735f.firebaseapp.com",
  projectId: "netflixgpt-7735f",
  storageBucket: "netflixgpt-7735f.firebasestorage.app",
  messagingSenderId: "46213268112",
  appId: "1:46213268112:web:1dc88c65d8f241343f0e15",
  measurementId: "G-2ZFHT8YN1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);