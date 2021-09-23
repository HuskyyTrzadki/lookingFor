import { useContext, useState } from "react";
import React from "react";
import BlueButton from "./BlueButton";
import { useAuth } from "../context/AuthContext";
import styles from "./MailLoginForm.module.scss";
import { Link } from "react-router-dom";
const MailLoginForm = ({ setShowMailLogin }) => {
  const { user, setUser } = useAuth();
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  ///
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  //jak zalogowano to zaktualizuj userContext o cale info o uzytkowniku na podstawie maila
  const authorization = (userinfo) => {
    if (JSON.stringify(userinfo) === JSON.stringify(adminUser)) {
      setUser(userinfo.email);
      setErr("");

      //pomyslnie zalogowano, zamknij okno i przenies na glowna
      //dodaj rozroznianie pomiedzy zlym haslem a zlym
    } else {
      setErr("account is not valid");
      setLoginInfo({ password: "" });
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    authorization(loginInfo);
  };
  return (
    <div
      className={err ? styles.MailLoginFormINVALID : styles.MailLoginFormVALID}
    >
      <nav className={styles.loginNavbar}>
        <h1>LoginForm</h1>
        <div
          className={styles.close}
          onClick={() => setShowMailLogin(false)}
        ></div>
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
        <BlueButton event={submitHandler} content="log in" />
      </form>
    </div>
  );
};

export default MailLoginForm;
