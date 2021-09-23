import React from "react";
import styles from "./Navbar.module.scss";
import LogOutButton from "./LogOutButton";
import { useAuth } from "../context/AuthContext";

function Navbar(text) {
  const { currentUser } = useAuth();

  return (
    <nav className={styles.Navbar}>
      <p className={(styles.Navbar, styles.nameOfWebsite)}>lookingFor</p>
      <p className={styles.Text}>{text.text}</p>
      {currentUser && <LogOutButton />}
    </nav>
  );
}
export default Navbar;
