// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCp7yFe-eBn6mcQWAISnVtltOmaZB81T5g",
  authDomain: "prepwise-48d07.firebaseapp.com",
  projectId: "prepwise-48d07",
  storageBucket: "prepwise-48d07.firebasestorage.app",
  messagingSenderId: "251852711461",
  appId: "1:251852711461:web:4a4a8b38370afcb20941cc",
  measurementId: "G-39VFRLMJZ5"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp()

export const auth = getAuth(app)
export const db = getFirestore(app)