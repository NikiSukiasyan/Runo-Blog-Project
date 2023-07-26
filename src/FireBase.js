import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
export const storage = getStorage(app);
