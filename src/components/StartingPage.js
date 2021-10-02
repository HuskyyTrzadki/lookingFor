import AnimatedGrid from "./AnimatedGrid";
import Circle from "./Circle";
import Navbar from "./Navbar";
import React, { useState } from "react";
import MailRegisterForm from "./MailRegisterForm";
import { useAuth } from "../context/AuthContext";

import styles from "./StartingPage.module.scss";
import MailLoginForm from "./MailLoginForm";

const StartingPage = () => {
  let text = "";
  const { currentUser } = useAuth();
  const [showFbLogin, setShowFbLogin] = useState(false);
  const [showMailRegister, setShowMailRegister] = useState(false);
  const [showLoginCircle, setShowLoginCircle] = useState(true);
  if (!currentUser) {
    text = "Please Log in";
  } else {
    currentUser.isAnonymous
      ? (text = "logged in anonymously")
      : (text = `logged in with ${currentUser.email}`);
  }
  return (
    <div className={styles.StartingPage}>
      <Navbar text={text} setShowLoginCircle={setShowLoginCircle} />
      <AnimatedGrid />
      {showLoginCircle && !currentUser && (
        //to zastap jednym setShowCircle!
        <Circle
          setShowLoginCircle={setShowLoginCircle}
          setShowFbLogin={setShowFbLogin}
          setShowMailRegister={setShowMailRegister}
        />
      )}
      {!currentUser && showMailRegister && (
        <MailRegisterForm
          setShowMailRegister={setShowMailRegister}
          setShowLoginCircle={setShowLoginCircle}
        />
      )}
      )
    </div>
  );
};
export default StartingPage;
