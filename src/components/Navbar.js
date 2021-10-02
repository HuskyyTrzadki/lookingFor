import React from "react";
import styles from "./Navbar.module.scss";
import LogOutButton from "./LogOutButton";
import { useAuth } from "../context/AuthContext";

function Navbar({ text, setShowLoginCircle }) {
  const { currentUser } = useAuth();

  return (
    <nav className={styles.Navbar}>
      <p className={(styles.Navbar, styles.nameOfWebsite)}>lookingFor</p>
      <p className={styles.Text}>{text}</p>
      {currentUser && <LogOutButton setShowLoginCircle={setShowLoginCircle} />}
    </nav>
  );
}
export default Navbar;
