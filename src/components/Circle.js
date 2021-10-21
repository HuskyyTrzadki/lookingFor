import React from "react";
import { BrowserRouter as  Link } from "react-router-dom";
import styles from "./Circle.module.scss";
import { useAuth } from "../context/AuthContext";

const Circle = ({
  setShowFbLogin,
  setShowMailRegister,
  setShowLoginCircle,
}) => {
  const { signInAnonymously } = useAuth();
  const handleAnonymousSignIn = async () => {
    await signInAnonymously();

    // expected output: "resolved"
  };

  return (
    <div className={styles.loginCircle}>
      <Link to="/logInWithFb">
        <button id={styles.fb} className={styles.quarter}></button>
      </Link>
      <button
        className={styles.quarter}
        id={styles.mail}
        onClick={() => {
          setShowMailRegister(true);
          setShowLoginCircle(false);
        }}
      ></button>
      <button
        id={styles.decline}
        className={styles.half}
        onClick={() => {
          handleAnonymousSignIn();
          setShowLoginCircle(false);
        }}
      >
        {" "}
        no, maybe later
      </button>
    </div>
  );
};
export default Circle;
