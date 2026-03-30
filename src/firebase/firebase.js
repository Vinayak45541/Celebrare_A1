import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa0kRU2CBl_Eebz5qyif8uq5QyXYoWuVM",
  authDomain: "celebrare1-auth.firebaseapp.com",
  projectId: "celebrare1-auth",
  storageBucket: "celebrare1-auth.firebasestorage.app",
  messagingSenderId: "752930439813",
  appId: "1:752930439813:web:8bac372c722172656a9fec"
};

const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Firestore
export const db = getFirestore(app);