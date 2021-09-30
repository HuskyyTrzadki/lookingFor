import { useContext, useState, useRef, createRef } from "react";
import React from "react";
import BlueButton from "./BlueButton";
import { useAuth } from "../context/AuthContext";
import styles from "./MailRegisterForm.module.scss";
import { Link } from "react-router-dom";

const AccountInfo = ({
  setShowMailRegister,
  values,
  handleNext,
  handleChange,
}) => {
  const [x, setX] = useState(0);

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const fileUploadHandler = () => {};
  console.log(values, handleChange);
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
            name="FirstName"
            defaultValue={values.firstName}
            className={styles.Input}
            onChange={
              (() => {
                setErr("");
              },
              handleChange("firstName"))
            }
          />
          <span></span>
          <label>firstName</label>
        </div>
        <div className={styles.txt_field}>
          <input
            required
            type="input"
            defaultValue={values.secondName}
            className={styles.Input}
            name="lastName"
            onChange={
              ((event) => {
                setErr("");
              },
              handleChange("lastName"))
            }
          />
          <span></span>

          <label>lastName</label>
        </div>
        {err !== "" && <p>{err}</p>}
        <div className={styles.signIn_link}>
          <Link to="/login">
            <h6>Already have an account? login here!</h6>
          </Link>
        </div>
        <BlueButton disabled={loading} event={handleNext} content="Next" />
      </form>
      {console.log(err)}
      {err == ""}
    </div>
  );
};
//jak sprawdzic czy mail sie zgadza bez wysylania requesta o rejestracje
export default AccountInfo;
