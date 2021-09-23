import { useContext, useState, useRef, createRef } from "react";
import React from "react";
import BlueButton from "./BlueButton";
import { useAuth } from "../context/AuthContext";
import styles from "./MailRegisterForm.module.scss";
import { Link } from "react-router-dom";
import AccountInfo from "./AccountInfo";
import PersonalInfo from "./PersonalInfo";
const MailRegisterForm = ({ setShowMailRegister }) => {
  const [step, setStep] = useState(0);

  return (
    <>
      {step == 0 && (
        <AccountInfo
          setShowMailRegister={setShowMailRegister}
          setCount={setStep}
        />
      )}
      {step == 1 && (
        <PersonalInfo
          setShowMailRegister={setShowMailRegister}
          setStep={setStep}
        />
      )}
    </>
  );
};

export default MailRegisterForm;
