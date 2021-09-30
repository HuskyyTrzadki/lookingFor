import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage"; // <----

const app = firebase.initializeApp({
  apiKey: "AIzaSyA26fGEYaMOQ7e6O1ASdB5KuFn2kfzuq0M",
  authDomain: "looking4-b4b10.firebaseapp.com",
  projectId: "looking4-b4b10",
  storageBucket: "looking4-b4b10.appspot.com",
  messagingSenderId: "176225682992",
  appId: "1:176225682992:web:154743e27c3f0f0264cff5",
  measurementId: "G-DZ1GJJ3V56",
});

export const auth = app.auth();
export default app;
export const storage = firebase.storage();
