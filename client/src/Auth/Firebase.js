import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBK99KoHBhM1RzddCqLem7VXySs-MIjHQE",
  authDomain: "arcade-bf263.firebaseapp.com",
  projectId: "arcade-bf263",
  storageBucket: "arcade-bf263.appspot.com",
  messagingSenderId: "482971100695",
  appId: "1:482971100695:web:799d7f6b72beb61d6a5e52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
