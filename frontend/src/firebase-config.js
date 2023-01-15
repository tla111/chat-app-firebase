// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzcCaUcF41HfKTzuHarcqB4UBESj7Kr4k",
    authDomain: "chatapp-d81f8.firebaseapp.com",
    projectId: "chatapp-d81f8",
    storageBucket: "chatapp-d81f8.appspot.com",
    messagingSenderId: "1065261613360",
    appId: "1:1065261613360:web:4b73ce1908e17cfb7e88f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();