import { useState } from "react";
import useClickOutside from "../customHooks/useClickOutside";
import React from "react";
import BlueButton from "./BlueButton";
import PasswordReset from "./PasswordReset";
import { useAuth } from "../context/AuthContext";
import styles from "./MailLoginForm.module.scss";
import { useRef } from "react";
const MailLoginForm = ({ setShowLoginForm, setShowLoginCircle }) => {
  const { login } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const modalRef = useRef();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  //jak zalogowano to zaktualizuj userContext o cale info o uzytkowniku na podstawie maila

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setShowLoginForm(false);
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  useClickOutside(modalRef, () => {
    if (open) setOpen(false);
  });
  return (
    <div
      className={
        error ? styles.MailLoginFormINVALID : styles.MailLoginFormVALID
      }
    >
      <nav className={styles.loginNavbar}>
        <h1>LoginForm</h1>
        <div
          className={styles.close}
          onClick={() => {
            setShowLoginForm(false);
            setShowLoginCircle(true);
          }}
        ></div>
      </nav>
      <form onSubmit={handleSubmit}>
        <div className={styles.txt_field}>
          <input type="text" required ref={emailRef} name="email" id="email" />
          <span></span>
          <label>Email</label>
        </div>
        <div className={styles.txt_field}>
          <input
            type="password"
            required
            ref={passwordRef}
            className={styles.Input}
            name="password"
            id="password"
          />
          <span></span>
          <label>Password</label>
        </div>
        {error !== "" && <p>account not valid</p>}
        <div className={styles.pass}>
          <h2
            onClick={() => {
              setOpen(true);
            }}
          >
            <p>Forgot Password?</p>
          </h2>
        </div>
        <PasswordReset modalRef={modalRef} open={open} />

        <div className={styles.signup_link}>
          <h6>don't have account yet? register here!</h6>
        </div>
        <BlueButton
          disabled={loading}
          event={handleSubmit}
          content="log in"
          isBig="true"
        />
      </form>
    </div>
  );
};

export default MailLoginForm;
