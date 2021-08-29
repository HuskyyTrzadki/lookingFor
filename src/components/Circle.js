import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./Circle.module.scss";

const Circle = ({ setShowFbLogin, setShowMailLogin }) => {
  return (
    <div className={styles.loginCircle}>
      <Router>
        <Link to="/logInWithFb">
          <button id={styles.fb} className={styles.quarter}></button>
        </Link>
        <button
          className={styles.quarter}
          id={styles.mail}
          onClick={() => setShowMailLogin(true)}
        ></button>
        <button id={styles.decline} className={styles.half}>
          {" "}
          <p>no, maybe later</p>
        </button>
      </Router>
    </div>
  );
};
export default Circle;
