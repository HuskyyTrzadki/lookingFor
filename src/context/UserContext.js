import React, { useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
const AuthContext = React.createContext();

const firebaseConfig = {
  apiKey: "AIzaSyBzV4dI1i5lxFZYdyz262k8k7D0DX8zHqQ",
  authDomain: "lookingfor-40d57.firebaseapp.com",
  projectId: "lookingfor-40d57",
  storageBucket: "lookingfor-40d57.appspot.com",
  messagingSenderId: "616428522064",
  appId: "1:616428522064:web:3c727c7d5baaefde72df55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();

export function useAuth() {
  return useContext(AuthContext);
}
export function UserContext({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword();
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
  });
  const value = {
    currentUser,
    signUp,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
