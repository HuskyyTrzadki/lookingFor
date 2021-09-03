import React from "react";
import styles from "./BlueButton.module.scss";

function BlueButton(props) {
  return (
    <button className={styles.BlueButton} onClick={props.event}>
      {props.content}
    </button>
  );
}
export default BlueButton;
