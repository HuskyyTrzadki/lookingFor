import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Circle = ({ setShowFbLogin, setShowMailLogin }) => {
  return (
    <div className="loginCircle">
      <Router>
        <Link to="/logInWithFb">
          <button id="fb" className="quarter"></button>
        </Link>
        <button
          id="mail"
          className="quarter"
          onClick={() => setShowMailLogin(true)}
        ></button>
        <button id="decline" className="half">
          {" "}
          <p>no, maybe later</p>
        </button>
      </Router>
    </div>
  );
};
export default Circle;
