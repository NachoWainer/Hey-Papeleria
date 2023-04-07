// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAief_Rvymvv7kYu1YjDk2r4oFwjMXJjqc",
  authDomain: "hey-ignaciowainer.firebaseapp.com",
  projectId: "hey-ignaciowainer",
  storageBucket: "hey-ignaciowainer.appspot.com",
  messagingSenderId: "782844776896",
  appId: "1:782844776896:web:998d4f739fa6e26ef53825"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
