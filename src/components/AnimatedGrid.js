import React from "react";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";
import styles from "./AnimatedGrid.module.scss";
function AnimatedGrid() {
  const { currentUser, signUp } = useAuth;
  const plateStyling = {
    key: `${currentUser == "" ? styles.lightPlate : styles.greyPlate}`,
  };
  console.log(plateStyling);
  return (
    <div className={styles.animatedGrid}>
      <div className={plateStyling.key}></div>
      <div className={plateStyling.key}></div>
      <div className={plateStyling.key}></div>
      <div className={plateStyling.key}></div>
    </div>
  );
}
export default AnimatedGrid;
