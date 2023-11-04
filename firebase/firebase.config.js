// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnNTJfPIaOi10TNqpmz5t1O1DCC1pJKcs",
  authDomain: "library-management-c1d42.firebaseapp.com",
  projectId: "library-management-c1d42",
  storageBucket: "library-management-c1d42.appspot.com",
  messagingSenderId: "1043115414586",
  appId: "1:1043115414586:web:a851a1e7a7e40afd515103"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }

/**
 *   apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
 * 
 */