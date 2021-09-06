import AnimatedGrid from "./AnimatedGrid";
import Circle from "./Circle";
import Navbar from "./Navbar";
import React, { useState } from "react";
import { useContext } from "react";
import MailRegisterForm from "./MailRegisterForm";
import { useAuth } from "../context/AuthContext";

import styles from "./StartingPage.module.scss";
import MailLoginForm from "./MailLoginForm";

const StartingPage = () => {
  let text = "";
  const { currentUser, signUp } = useAuth();
  const [showFbLogin, setShowFbLogin] = useState(false);
  const [showMailRegister, setShowMailRegister] = useState(false);
  currentUser
    ? (text = "Please Log in")
    : (text = `logged in with ${currentUser}`);
  return (
    <div className={styles.StartingPage}>
      <Navbar text={text} />
      <AnimatedGrid />
      {!currentUser && !showFbLogin && !showMailRegister && (
        <Circle
          setShowFbLogin={setShowFbLogin}
          setShowMailRegister={setShowMailRegister}
        />
      )}
      <MailLoginForm setShowMailLogin={setShowMailRegister} />)
    </div>
  );
};
export default StartingPage;
