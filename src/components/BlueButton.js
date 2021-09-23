import React from "react";
import styles from "./BlueButton.module.scss";
import BlueNextArrow from "./BlueNextArrow";

function BlueButton(props) {
  return (
    <button
      disabled={props.loading}
      className={styles.BlueButton}
      onClick={props.event}
    >
      {props.content}
      {!props.showNextArrow && <BlueNextArrow />}
    </button>
  );
}
export default BlueButton;
