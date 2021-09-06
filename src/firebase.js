import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBzV4dI1i5lxFZYdyz262k8k7D0DX8zHqQ",
  authDomain: "lookingfor-40d57.firebaseapp.com",
  projectId: "lookingfor-40d57",
  storageBucket: "lookingfor-40d57.appspot.com",
  messagingSenderId: "616428522064",
  appId: "1:616428522064:web:3c727c7d5baaefde72df55",
};
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth();
