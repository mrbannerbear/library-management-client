/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, isLoading] = useState(true);

  const signup = (email, password) => {
    isLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    isLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const provider = new GoogleAuthProvider()

  const googleAuth = () => {
    isLoading(true)
    return signInWithPopup(auth, provider)
  }

  const logout = () => {
    isLoading(true)
    return signOut(auth);
  };

  useEffect( () => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user)
        setUser(user)
        isLoading(false)
        const loggedUser = { email: user?.email }
        if(user){
            axios.post("https://lib-management-server.vercel.app/jwt", loggedUser, { withCredentials: true })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }
        else{
            axios.post("https://lib-management-server.vercel.app/logout", loggedUser, {
                withCredentials: true
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        }
    })

    return () => unSub()

} , [] )

  const value = { signup, login, logout, user, loading, googleAuth };

  return (
    <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
  );
};

export default AuthContext;
