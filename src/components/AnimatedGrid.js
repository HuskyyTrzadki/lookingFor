import React from "react";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";
import styles from "./AnimatedGrid.module.scss";
function AnimatedGrid() {
  const { currentUser } = useAuth();
  const plateStyling = {
    key: `${!currentUser ? styles.lightPlate : styles.greyPlate}`,
  };

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
