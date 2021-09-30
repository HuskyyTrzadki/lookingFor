import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { storage } from "../firebase";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    console.log("registered");
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function uploadAvatar(avatar, userValues) {
    const uploadTask = storage.ref(`courseMaterial/${avatar}/`).put(avatar);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // file upload progress report
      },
      (error) => {
        // file upload failed
        console.log(error);
      },
      () => {
        // file upload completed
        storage
          .ref(`courseMaterial`)
          .child(`${avatar}`)
          .getDownloadURL()
          .then(
            (url) => {
              // got download URL
              //setUrl(url);
              handleChange(userValues, "avatarURL");
            },
            (error) => {
              // failed to get download URL
              console.log(error);
            }
          );
      }
    );
  }

  function signInAnonymously() {
    return auth.signInAnonymously();
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    signInAnonymously,
    uploadAvatar,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
