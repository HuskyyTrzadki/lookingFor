import AnimatedGrid from "./AnimatedGrid";
import Circle from "./Circle";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import MailRegisterForm from "./MailRegisterForm";
import { useAuth } from "../context/AuthContext";

import styles from "./StartingPage.module.scss";
import MailLoginForm from "./MailLoginForm";

const StartingPage = () => {
  const { currentUser, getUserData } = useAuth();

  let text = "";
  const [showMailRegister, setShowMailRegister] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showLoginCircle, setShowLoginCircle] = useState(true);
  if (!currentUser) {
    text = "Please Log in";
  } else {
    currentUser.isAnonymous
      ? (text = "logged in anonymously")
      : (text = `logged in with ${currentUser.email}`);
  }
  useEffect(() => {
    getUserData().then((data) => console.log(data));
  });
  return (
    <div className={styles.StartingPage}>
      <Navbar text={text} setShowLoginCircle={setShowLoginCircle} />
      <AnimatedGrid />
      {showLoginCircle && !currentUser && (
        //to zastap jednym setShowCircle!
        <Circle
          setShowLoginCircle={setShowLoginCircle}
          setShowMailRegister={setShowMailRegister}
        />
      )}
      {!currentUser && showMailRegister && (
        <MailRegisterForm
          setShowLoginForm={setShowLoginForm}
          setShowMailRegister={setShowMailRegister}
          setShowLoginCircle={setShowLoginCircle}
        />
      )}
      {showLoginForm && (
        <MailLoginForm
          setShowLoginForm={setShowLoginForm}
          setShowLoginCircle={setShowLoginCircle}
        />
      )}
      )
    </div>
  );
};
export default StartingPage;
