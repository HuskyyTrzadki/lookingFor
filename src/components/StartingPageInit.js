import AnimatedGrid from "./AnimatedGrid";
import Circle from "./Circle";
import Navbar from "./Navbar";
import React from "react";

const StartingPageInit = () => {
  const text = "log in please";
  return (
    <div className="startingPage">
      <Navbar text={text} />
      <AnimatedGrid />
      <Circle />
    </div>
  );
};
export default StartingPageInit;
