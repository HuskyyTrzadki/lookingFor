import Circle from "./Circle";
import React from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function AnimatedGrid() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="animated-grid">
      <div className="plate"></div>
      <div className="plate"></div>
      <div className="plate"></div>
      <div className="plate"></div>
    </div>
  );
}
export default AnimatedGrid;
