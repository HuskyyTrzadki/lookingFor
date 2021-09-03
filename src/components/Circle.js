import { useContext } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./Circle.module.scss";
import { UserContext } from "../context/UserContext";

const Circle = ({ setShowFbLogin, setShowMailLogin }) => {
  const { user, setUser } = useContext(UserContext);

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
        <button
          id={styles.decline}
          className={styles.half}
          onClick={() => {
            setUser("ANONYMOUS");
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
