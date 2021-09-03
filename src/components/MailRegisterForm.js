import { useContext, useState, useRef } from "react";
import React from "react";
import BlueButton from "./BlueButton";
import { UserContext } from "../context/UserContext";
import styles from "./MailRegisterForm.module.scss";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/auth";
const auth = firebase.auth();
const firestore = firebase.firestore();
const MailRegisterForm = ({ setShowMailRegister }) => {
  const { user, setUser } = useContext(UserContext);
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");

  ///
  const signUp = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(loginInfo.email, loginInfo.password);
  };

  return (
    <UserContext>
      <div>
        <nav className={styles.loginNavbar}>
          <h1>RegisterForm</h1>
          <div className={styles.close}></div>
        </nav>
        <form>
          <div className={styles.txt_field}>
            <input
              type="text"
              required
              value={loginInfo.login}
              name="email"
              id="email"
              onChange={(event) => {
                setLoginInfo({ ...loginInfo, email: event.target.value });
                setErr("");
              }}
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className={styles.txt_field}>
            <input
              type="password"
              required
              type="password"
              className={styles.Input}
              value={loginInfo.password}
              name="password"
              id="password"
              onChange={(event) => {
                setLoginInfo({ ...loginInfo, password: event.target.value });
                setErr("");
              }}
            />
            <span></span>
            <label>Password</label>
          </div>
          {err !== "" && <p>account not valid</p>}
          <div className={styles.pass}>
            <h2>Forgot Password?</h2>
          </div>
          <div className={styles.signup_link}>
            <Link to="/register">
              <h6>don't have account yet? register here!</h6>
            </Link>
          </div>
          <BlueButton event={handleSubmit} content="log in" />
        </form>
      </div>
    </UserContext>
  );
};

export default MailRegisterForm;