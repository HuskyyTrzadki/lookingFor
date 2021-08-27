import React from "react";
import styles from "./Navbar.module.scss";

function Navbar(text) {
  return <nav className={styles.Navbar}>{text.text}</nav>;
}
export default Navbar;
