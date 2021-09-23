import { useContext, useState, useRef, createRef } from "react";
import React from "react";
import BlueButton from "./BlueButton";
import { useAuth } from "../context/AuthContext";
import styles from "./MailRegisterForm.module.scss";
import { Link } from "react-router-dom";

const AccountInfo = ({ setShowMailRegister, setStep }) => {
  const [x, setX] = useState(0);
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();
  const 

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(true);
  const handleNext = () => {
    console.log("next");
    setStep(1);
  };
  const fileUploadHandler=()=>{

  }

  return (
    <div
      className={err ? styles.MailLoginFormINVALID : styles.MailLoginFormVALID}
    >
      <nav className={styles.loginNavbar}>
        <h1>RegisterForm</h1>
        <div
          className={styles.close}
          onClick={() => {
            setShowMailRegister(false);
          }}
        ></div>
      </nav>
      <form>
        <div className={styles.txt_field}>
          <input
            type="input"
            required
            name="email"
            className={styles.Input}
            ref={email}
            onChange={() => {
              setErr("");
            }}
          />
          <span></span>
          <label>email</label>
        </div>
        <div className={styles.txt_field}>
          <input
            required
            type="password"
            className={styles.Input}
            name="password"
            ref={password}
            onChange={(event) => {
              setErr("");
            }}
          />
          <span></span>

          <label>password</label>
        </div>
        <div className={styles.txt_field}>
          <input
            required
            type="password"
            className={styles.Input}
            name="passwordConfirmastion"
            ref={passwordConfirmation}
            onChange={(event) => {
              setErr("");
            }}
          />
          <input
            required
            type="file"
            className={styles.Input}
            name="passwordConfirmastion"
            ref={passwordConfirmation}
            onChange={(event) => {
              setErr("");
            }}
          />
          <button onClick={this.fileUploadHandler} content="upload" />
          <span></span>

          <label>password</label>
        </div>

        {err !== "" && <p>{err}</p>}
        <div className={styles.signIn_link}>
          <Link to="/login">
            <h6>Already have an account? login here!</h6>
          </Link>
        </div>
        <BlueButton
          disabled={loading}
          event={setStep}
          content="Next"
          showArrow={showNextArrow}
        />
      </form>
      {console.log(err)}
      {err == ""}
    </div>
  );
};
//jak sprawdzic czy mail sie zgadza bez wysylania requesta o rejestracje
export default AccountInfo;
