import { useContext, useState } from "react";
import React from "react";
import BlueButton from "./BlueButton";
import { UserContext } from "../context/UserContext";

const LoginForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  const authorization = (userinfo) => {
    if (JSON.stringify(userinfo) === JSON.stringify(adminUser)) {
      setUser(userinfo.email);
      setErr("");
      //pomyslnie zalogowano, zamknij okno i przenies na glowna
    } else {
      console.log("xd");
      setErr("account is not valid");
      setLoginInfo({ password: "" });
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    authorization(loginInfo);
    console.log("d");
  };
  return (
    <div className="LoginForm">
      <h1>Login</h1>
      <form>
        <div className="txt_field">
          <input
            type="text"
            required
            value={loginInfo.login}
            name="email"
            id="email"
            onChange={(event) =>
              setLoginInfo({ ...loginInfo, email: event.target.value })
            }
          />
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input
            type="password"
            required
            type="password"
            className="Input"
            value={loginInfo.password}
            name="password"
            id="password"
            onChange={(event) =>
              setLoginInfo({ ...loginInfo, password: event.target.value })
            }
          />
          <span></span>
          <label>Password</label>
        </div>
        {err !== "" && <p>zle haslo</p>}
        <div className="pass">Forgot Password?</div>
        <div className="signup_link">
          Not a member? <a href="#">Signup</a>
        </div>
        <button className="BlueButton" onClick={submitHandler}></button>;
      </form>
    </div>
  );
};

export default LoginForm;
