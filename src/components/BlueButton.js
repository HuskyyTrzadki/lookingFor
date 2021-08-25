import React from "react";
function BlueButton(props) {
  return (
    <button className="BlueButton" onClick={props.event}>
      {props.content}
    </button>
  );
}
export default BlueButton;
