import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./Circle.module.scss";

const Circle = ({ setShowFbLogin, setShowMailLogin }) => {
  return (
    <div className={styles.loginCircle}>
      <Router>
        <Link to="/logInWithFb">
          <button id="fb" className={styles.quarter}></button>
        </Link>
        <button
          id="mail"
          className={styles.quarter}
          onClick={() => setShowMailLogin(true)}
        ></button>
        <button id="decline" className={styles.decline}>
          {" "}
          <p>no, maybe later</p>
        </button>
      </Router>
    </div>
  );
};
export default Circle;
