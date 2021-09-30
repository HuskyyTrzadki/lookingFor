import { useContext, useState, useRef, createRef } from "react";
import React from "react";
import BlueButton from "./BlueButton";
import { useAuth } from "../context/AuthContext";
import styles from "./MailRegisterForm.module.scss";
import { Link } from "react-router-dom";
import AccountInfo from "./AccountInfo";
import PersonalInfo from "./PersonalInfo";
const MailRegisterForm = ({ setShowMailRegister }) => {
  const [step, setStep] = useState(1);
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
  const [multiFormValues, setMultiFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 20,
    gender: "",
  });
  const handleChange = (e) => {
    e.target.name === "firstName" || e.target.name === "lastName"
      ? setMultiFormValues({
          ...multiFormValues,
          [e.target.name]:
            e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
        })
      : setMultiFormValues({
          ...multiFormValues,
          [e.target.name]: e.target.value,
        });
  };

  return (
    <>
      {step === 0 && (
        <AccountInfo
          values={multiFormValues}
          setShowMailRegister={setShowMailRegister}
          handleChange={handleChange}
          handleNext={handleNext}
        />
      )}
      {step === 1 && (
        <PersonalInfo
          values={multiFormValues}
          setShowMailRegister={setShowMailRegister}
          handleChange={handleChange}
          handleNext={handleNext}
          setMultiFormValues={setMultiFormValues}

          //daj na accountinfo dwa przyciski zamiast jednego
        />
      )}
    </>
  );
};

export default MailRegisterForm;
