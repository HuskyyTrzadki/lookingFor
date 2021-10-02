import React from "react";
import styles from "./BlueButton.module.scss";
import ButtonArrow from "./ButtonArrow";

function BlueButton(props) {
  return (
    <button
      disabled={props.loading}
      className={styles.BlueButton}
      onClick={props.event}
    >
      {props.content}
      {!props.showNextArrow && <ButtonArrow />}
    </button>
  );
}
export default BlueButton;
