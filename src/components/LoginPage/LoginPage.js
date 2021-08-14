import { useState } from "react";

const LoginPage = ({ Login, error }) => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  const authorization = (userinfo) => {
    if (JSON.stringify(userinfo) === JSON.stringify(adminUser)) {
      Login(userinfo.email);
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
    <div>
      <input
        className="Input"
        value={loginInfo.login}
        name="email"
        id="email"
        onChange={(event) =>
          setLoginInfo({ ...loginInfo, email: event.target.value })
        }
      />

      <form onSubmit={submitHandler}>
        <input
          className="Input"
          value={loginInfo.password}
          name="password"
          id="password"
          onChange={(event) =>
            setLoginInfo({ ...loginInfo, password: event.target.value })
          }
        />
      </form>
      <button onClick={submitHandler}></button>
      {err != "" && <p>zle haslo</p>}
    </div>
  );
};

export default LoginPage;
