/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, isLoading] = useState(true);

  const signup = (email, password) => {
    isLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    isLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut();
  };

  const value = { signup, login, logout, user, loading };

  return (
    <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;
