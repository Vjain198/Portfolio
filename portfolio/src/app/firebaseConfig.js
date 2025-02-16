// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAP8lFvjAzUOqcMkoJwqr9WB8FFj92qCBc",
  authDomain: "portfolio-c0734.firebaseapp.com",
  projectId: "portfolio-c0734",
  storageBucket: "portfolio-c0734.firebasestorage.app",
  messagingSenderId: "116465931351",
  appId: "1:116465931351:web:5b1024d4d8f716c8413f12",
  measurementId: "G-1GER6Z3XFN",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
