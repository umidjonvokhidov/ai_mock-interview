import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTqhlV15GYfJQlNSIdM0fhW-F9sA5im7g",
  authDomain: "prepwise-13ee1.firebaseapp.com",
  projectId: "prepwise-13ee1",
  storageBucket: "prepwise-13ee1.firebasestorage.app",
  messagingSenderId: "633330628009",
  appId: "1:633330628009:web:0b95cfbe6b4367783300b8",
  measurementId: "G-LHHHK8MNF3",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
