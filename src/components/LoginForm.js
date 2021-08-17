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
      setErr("account is not valid");
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    authorization(loginInfo);
  };
  return (
    <div className="LoginForm">
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Login</h2>
          <div className="form-group">
            <input
              className="Input"
              value={loginInfo.login}
              name="email"
              id="email"
              onChange={(event) =>
                setLoginInfo({ ...loginInfo, email: event.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="Input"
              value={loginInfo.password}
              name="password"
              id="password"
              onChange={(event) =>
                setLoginInfo({ ...loginInfo, password: event.target.value })
              }
            />
            {err !== "" && <p>zle haslo</p>}
          </div>
          <BlueButton submitHandler />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
