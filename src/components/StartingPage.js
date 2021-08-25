import AnimatedGrid from "./AnimatedGrid";
import Circle from "./Circle";
import Navbar from "./Navbar";
import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import LoginForm from "./MailLoginForm";
import MailLoginForm from "./MailLoginForm";

const StartingPage = () => {
  let text = "log in please";
  const { user, setUser } = useContext(UserContext);
  const [showFbLogin, setShowFbLogin] = useState(false);
  const [showMailLogin, setShowMailLogin] = useState(false);
  {
    user == "" ? (text = "Please Log in") : (text = `logged in with ${user}`);
  }
  return (
    <div className="startingPage">
      <Navbar text={text} />
      <AnimatedGrid />
      {user == "" && !showFbLogin && !showMailLogin && (
        <Circle
          setShowFbLogin={setShowFbLogin}
          setShowMailLogin={setShowMailLogin}
        />
      )}
      {showMailLogin && user == "" && <MailLoginForm />}
    </div>
  );
};
export default StartingPage;
