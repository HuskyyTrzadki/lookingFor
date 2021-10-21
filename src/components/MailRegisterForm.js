import { useState } from "react";
import React from "react";
import AccountInfo from "./AccountInfo";
import PersonalInfo from "./PersonalInfo";
const MailRegisterForm = ({
  setShowMailRegister,
  setShowLoginCircle,
  setShowLoginForm,
}) => {
  const [step, setStep] = useState(0);
  //dodaj strzalke w lewo
  
  const handleNext = () => {
    setStep((nextStep) => nextStep + 1);
  };
  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };


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
