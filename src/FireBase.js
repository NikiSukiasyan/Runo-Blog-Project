// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYJbo3v-3ARuyIf0cYCqrA1-U4zGE4HNE",
  authDomain: "runo-blog.firebaseapp.com",
  databaseURL: "https://runo-blog-default-rtdb.firebaseio.com",
  projectId: "runo-blog",
  storageBucket: "runo-blog.appspot.com",
  messagingSenderId: "295589466264",
  appId: "1:295589466264:web:426434b34211294afa00ed",
  measurementId: "G-7Z64XM5FRX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
