import React from "react";
import { useAuth } from "../context/AuthContext";
import styles from "./AnimatedGrid.module.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

function AnimatedGrid() {
  const { currentUser } = useAuth();
  const plateStyling = {
    isGrey: `${!currentUser ? styles.lightPlate : styles.greyPlate}`,
  };

  return (
    <Router>
      <div className={styles.animatedGrid}>
        <div className={plateStyling.isGrey}>
          <Link to="/adventure">
            {currentUser && (
              <div className={styles.imageOverLay}>
                <p className={styles.imageDescription}>adventure</p>
              </div>
            )}
          </Link>
        </div>
        <div className={plateStyling.isGrey}>
          <Link to="/party">
            {currentUser && (
              <div className={styles.imageOverLay}>
                <p className={styles.imageDescription}>party</p>
              </div>
            )}
          </Link>
        </div>
        <div className={plateStyling.isGrey}>
          {currentUser && (
            <Link to="/sport">
              <div className={styles.imageOverLay}>
                <p className={styles.imageDescription}>sport</p>
              </div>
            </Link>
          )}
        </div>
        <div className={plateStyling.isGrey}>
          <Link to="/study">
            {currentUser && (
              <div className={styles.imageOverLay}>
                <p className={styles.imageDescription}>study</p>
              </div>
            )}
          </Link>
        </div>
      </div>
    </Router>
  );
}
export default AnimatedGrid;
