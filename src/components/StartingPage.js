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
  const { currentUser, signUp } = useAuth();
  const [showFbLogin, setShowFbLogin] = useState(false);
  const [showMailRegister, setShowMailRegister] = useState(false);
  if (!currentUser) {
    text = "Plase Log in";
  } else {
    currentUser.isAnonymous
      ? (text = "logged in anonymously")
      : (text = `logged in with ${currentUser.email}`);
  }
  return (
    <div className={styles.StartingPage}>
      <Navbar text={text} />
      <AnimatedGrid />
      {!showFbLogin &&
        !showMailRegister &&
        currentUser !== "anonymous" &&
        !currentUser && (
          <Circle
            setShowFbLogin={setShowFbLogin}
            setShowMailRegister={setShowMailRegister}
          />
        )}
      {!currentUser && showMailRegister && (
        <MailRegisterForm setShowMailRegister={setShowMailRegister} />
      )}
      )
    </div>
  );
};
export default StartingPage;
