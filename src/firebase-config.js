import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2dhJIyXgl9CbCgWk-X1tB7kJ0Ula_Q4E",
  authDomain: "fir-rowy-6d28b.firebaseapp.com",
  projectId: "fir-rowy-6d28b",
  storageBucket: "fir-rowy-6d28b.appspot.com",
  messagingSenderId: "706527148334",
  appId: "1:706527148334:web:7d76a72a9561a5e10fe2bf",
  measurementId: "G-F01PVVZFX3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);