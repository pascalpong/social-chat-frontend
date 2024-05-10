import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFOcAn0cJ7IybxhwM3zj0_qevvep0Lw8A",
  authDomain: "social-chat-421403.firebaseapp.com",
  projectId: "social-chat-421403",
  storageBucket: "social-chat-421403.appspot.com",
  messagingSenderId: "443373692701",
  appId: "1:443373692701:web:161502108c0026249fe3f4",
  measurementId: "G-7LVZS9HBLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();