import { useContext, useState, useRef, createRef } from "react";
import React from "react";
import BlueButton from "./BlueButton";
import { useAuth } from "../context/AuthContext";
import styles from "./MailRegisterForm.module.scss";
import { Link } from "react-router-dom";
import AgeSlider from "./AgeSlider";
import GenderPicker from "./GenderPicker";
import axios from "axios";
import { checkValuesAgainstBoundaries } from "react-range";

const PersonalInfo = ({
  setShowMailRegister,
  values,
  handleNext,
  handleChange,
  setMultiFormValues,
}) => {
  const [x, setX] = useState(0);

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const guessGender = async (name) => {
    console.log("calling");
    const result = await axios.get(`https://api.genderize.io?name=${name}`);
    setMultiFormValues({
      ...values,
      ["gender"]: result.data.gender,
    });
  };

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
            name="firstName"
            className={styles.Input}
            value={values.firstName}
            onBlur={(e) => {
              guessGender(e.target.value);
            }}
            onChange={(e) => {
              setErr("");
              handleChange(e);
            }}
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
            value={values.lastName}
            name="lastName"
            onChange={(e) => {
              setErr("");
              handleChange(e);
            }}
          />
          <span></span>

          <label>lastName</label>
        </div>

        <AgeSlider values={values} handleChange={handleChange} />

        <GenderPicker values={values} handleChange={handleChange} />

        {err !== "" && <p>{err}</p>}
        <div className={styles.signIn_link}>
          <Link to="/login">
            <h6>Already have an account? login here!</h6>
          </Link>
        </div>
        <BlueButton disabled={loading} event={handleNext} content="Register!" />
      </form>
      {console.log(err)}
      {err == ""}
    </div>
  );
};
//jak sprawdzic czy mail sie zgadza bez wysylania requesta o rejestracje
export default PersonalInfo;
