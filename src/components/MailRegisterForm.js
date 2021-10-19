import { useContext, useState, useRef, createRef } from "react";
import React from "react";
import BlueButton from "./BlueButton";
import { useAuth } from "../context/AuthContext";
import styles from "./MailRegisterForm.module.scss";
import { Link } from "react-router-dom";
import AccountInfo from "./AccountInfo";
import PersonalInfo from "./PersonalInfo";
const MailRegisterForm = ({
  setShowMailRegister,
  setShowLoginCircle,
  setShowLoginForm,
}) => {
  const [step, setStep] = useState(0);
  //dodaj strzalke w lewo
  const getSteps = () => {
    return ["Account details", "User details"];
  };
  const handleNext = () => {
    setStep((nextStep) => nextStep + 1);
  };
  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const steps = getSteps();

  return (
    <>
      {step === 0 && (
        <PersonalInfo
          //brakuje  use auth
          setShowMailRegister={setShowMailRegister}
          handleNext={handleNext}
          setShowLoginCircle={setShowLoginCircle}
          setShowLoginForm={setShowLoginForm}
          //daj na accountinfo dwa przyciski zamiast jednego
        />
      )}
      {step === 1 && (
        <AccountInfo
          setShowMailRegister={setShowMailRegister}
          handlePrev={handlePrev}
          setShowLoginCircle={setShowLoginCircle}
        />
      )}
    </>
  );
};

export default MailRegisterForm;
