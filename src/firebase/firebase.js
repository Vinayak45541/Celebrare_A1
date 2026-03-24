import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDa0kRU2CBl_Eebz5qyif8uq5QyXYoWuVM",
  authDomain: "celebrare1-auth.firebaseapp.com",
  projectId: "celebrare1-auth",
  storageBucket: "celebrare1-auth.firebasestorage.app",
  messagingSenderId: "752930439813",
  appId: "1:752930439813:web:8bac372c722172656a9fec"
};

const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);

// Google Provider
export const provider = new GoogleAuthProvider();