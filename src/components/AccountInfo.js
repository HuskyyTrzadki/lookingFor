import { useState, useRef } from "react";
import BlueButton from "./BlueButton";
import { useAuth } from "../context/AuthContext";
import styles from "./MailRegisterForm.module.scss";

const AccountInfo = ({
  setShowMailRegister,
  setShowLoginCircle,
  handlePrev,
}) => {
  const { handleChange, setValues, values, signup } = useAuth();

  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setErr("Passwords do not match");
    }

    try {
      setErr("");
      setLoading(true);
      await console.log("signUP!!");
      console.log(passwordRef.current.value);
      signup(passwordRef.current.value);
    } catch {
      setErr("Failed to create an account");
    }
    setLoading(false);
    setShowMailRegister(false);
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
            setShowLoginCircle(true);

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
            onChange={(e) => {
              console.log(values);
              setErr("");
              handleChange(e);
            }}
          />
          <span></span>
          <label>email</label>
        </div>
        <div className={styles.txt_field}>
          <input
            required
            type="password"
            defaultValue={values.secondName}
            className={styles.Input}
            name="password"
            ref={passwordRef}
            onChange={() => {
              setErr("");
            }}
          />
          <span></span>
          <label>password</label>
        </div>
        <div className={styles.txt_field}>
          <input
            type="password"
            required
            name="password"
            defaultValue={values.firstName}
            className={styles.Input}
            ref={passwordConfirmRef}
            onChange={() => {
              setErr("");
            }}
          />
          <span></span>
          <label>passwordConfirmation</label>
        </div>

        {err !== "" && <p>{err}</p>}
        <div className={styles.signIn_link}></div>
        <BlueButton
          disabled={loading}
          event={(e) => {
            handlePrev();
          }}
          content="back"
          isBig="false"
          directionOfArrow="left"
        />
        <BlueButton
          disabled={loading}
          event={handleSubmit}
          content="register"
          isBig="false"
          directionOfArrow="right"
        />
      </form>
      {console.log(err)}
      {err == ""}
    </div>
  );
};
//jak sprawdzic czy mail sie zgadza bez wysylania requesta o rejestracje
export default AccountInfo;
