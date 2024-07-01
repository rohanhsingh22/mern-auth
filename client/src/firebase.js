// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-6b94f.firebaseapp.com",
  projectId: "mern-auth-6b94f",
  storageBucket: "mern-auth-6b94f.appspot.com",
  messagingSenderId: "922972133405",
  appId: "1:922972133405:web:c6a010f5a3a141b64bcef4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);