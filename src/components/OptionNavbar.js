import React from "react";
import styles from "./OptionNavbar.module.scss";
import { useAuth } from "../context/AuthContext";

function Navbar({ text, setShowLoginCircle }) {
  const { currentUser } = useAuth();

  return <nav className={styles.Navbar}></nav>;
}
export default Navbar;
