// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ground-thoughts.firebaseapp.com",
  projectId: "ground-thoughts",
  storageBucket: "ground-thoughts.appspot.com",
  messagingSenderId: "808747458289",
  appId: "1:808747458289:web:b97111f11d30c659841350",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
