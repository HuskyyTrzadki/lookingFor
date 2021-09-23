import { useContext } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./Circle.module.scss";
import { AuthProvider, UserContext } from "../context/AuthContext";
import { useAuth } from "../context/AuthContext";

const Circle = ({ setShowFbLogin, setShowMailRegister }) => {
  const { signInAnonymously, currentUser } = useAuth();
  const handleAnonymousSignIn = async () => {
    await signInAnonymously();

    // expected output: "resolved"
  };

  return (
    <div className={styles.loginCircle}>
      <Router>
        <Link to="/logInWithFb">
          <button id={styles.fb} className={styles.quarter}></button>
        </Link>
        <button
          className={styles.quarter}
          id={styles.mail}
          onClick={() => setShowMailRegister(true)}
        ></button>
        <button
          id={styles.decline}
          className={styles.half}
          onClick={() => {
            handleAnonymousSignIn();
          }}
        >
          {" "}
          no, maybe later
        </button>
      </Router>
    </div>
  );
};
export default Circle;
