import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { storage } from "../firebase";
import { firestore } from "../firebase";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 20,
    gender: "",
    avatarURL: "",
  });
  const handleChange = (e) => {
    e.target.name === "firstName" || e.target.name === "lastName"
      ? setValues({
          ...values,
          [e.target.name]:
            e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
        })
      : setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
  };

  function signup(password) {
    try {
      console.log(values);
      auth
        .createUserWithEmailAndPassword(values.email, password)
        .then((resp) => {
          return firestore.collection("users").doc(resp.user.uid).set({
            firstName: values.firstName,
            lastName: values.lastName,
            age: values.age,
            gender: values.gender,
            avatarURL: values.avatarURL,
          });
        });
    } catch (error) {
      console.log(error);
    }
  }
  function uploadAvatar(avatar) {
    console.log("upload avatar");
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
              setValues({
                ...values,
                ["avatarURL"]: url,
              });
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
    values,
    setValues,
    handleChange,
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
