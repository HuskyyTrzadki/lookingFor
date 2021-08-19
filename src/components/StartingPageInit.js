import AnimatedGrid from "./AnimatedGrid";
import Circle from "./Circle";
import Navbar from "./Navbar";
import React from "react";
import { useContext } from "react";

import { UserContext } from "../context/UserContext";

const StartingPageInit = () => {
  const text = "log in please";
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="startingPage">
      <Navbar text={text} />
      <AnimatedGrid />
      <Circle />
      {user}
    </div>
  );
};
export default StartingPageInit;
