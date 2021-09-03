import React from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import styles from "./AnimatedGrid.module.scss";
function AnimatedGrid() {
  const { user, setUser } = useContext(UserContext);
  const plateStyling = {
    key: `${user == "" ? styles.lightPlate : styles.greyPlate}`,
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
