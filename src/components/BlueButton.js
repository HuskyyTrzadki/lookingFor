import React from "react";
import styles from "./BlueButton.module.scss";
import ButtonArrow from "./ButtonArrow";

function BlueButton(props) {
  return (
    <button
      disabled={props.loading}
      className={`${styles.BlueButton} ${
        props.isBig == "true" ? styles.big : styles.small
      }`}
      onClick={props.event}
    >
      {props.content}
      {!props.showNextArrow && (
        <ButtonArrow direction={props.directionOfArrow} />
      )}
    </button>
  );
}
export default BlueButton;
