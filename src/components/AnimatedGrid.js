import React from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import styles from "./AnimatedGrid.module.scss";
function AnimatedGrid() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className={styles.animatedGrid}>
      <div className={styles.plate}></div>
      <div className={styles.plate}></div>
      <div className={styles.plate}></div>
      <div className={styles.plate}></div>
    </div>
  );
}
export default AnimatedGrid;
