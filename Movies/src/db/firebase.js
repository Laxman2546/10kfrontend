// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAFrFq_1rjBb_FOlvq_NzSx4v2lAxIOx7Y",
  authDomain: "moviemate-3fc6d.firebaseapp.com",
  projectId: "moviemate-3fc6d",
  storageBucket: "moviemate-3fc6d.firebasestorage.app",
  messagingSenderId: "908402787092",
  appId: "1:908402787092:web:9f116cdc5df4273f053801",
  measurementId: "G-XZGPDQ3ZQX",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
