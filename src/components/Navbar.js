import React from "react";
import styles from "./Navbar.module.scss";

function Navbar(text) {
  return (
    <nav className={styles.Navbar}>
      <p className={(styles.Navbar, styles.nameOfWebsite)}>lookingFor</p>
      <p className={styles.Text}>{text.text}</p>
    </nav>
  );
}
export default Navbar;
