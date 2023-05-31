// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgDfgexi54wmd_Qb3bB-blAGnjbVk87Qs",
  authDomain: "miecomerce1.firebaseapp.com",
  projectId: "miecomerce1",
  storageBucket: "miecomerce1.appspot.com",
  messagingSenderId: "194901316175",
  appId: "1:194901316175:web:f828c21a4d4dd1a49cd03a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, getFirestore };