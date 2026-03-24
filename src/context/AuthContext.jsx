import { createContext, useContext, useEffect, useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { setUserWithTTL, getUserWithTTL, removeUser } from "../utils/appStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore session on refresh
  useEffect(() => {
    const storedUser = getUserWithTTL("user");
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  //Login function
  const login = async () => {
    const result = await signInWithPopup( auth, provider );
    const userData = {
      name: result.user.displayName,
      email: result.user.email,
    };
    setUser(userData);
    setUserWithTTL( "user", userData );
  };


  //Logout function
  const logout = async () => {
    await signOut(auth);
    setUser(null);
    removeUser("user");
  };


  return (
    <AuthContext.Provider
     value={ { user, login, logout, loading } } 
    >
      {children}
    </AuthContext.Provider>
  );

};

export const useAuth = () => useContext(AuthContext);