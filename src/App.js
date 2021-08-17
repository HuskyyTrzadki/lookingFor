import StartingPageInit from "./components/StartingPageInit";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import React from "react";
import { UserContext } from "./context/UserContext";
const App = () => {
  const [user, setUser] = useState("");

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Route path="/" exact component={StartingPageInit} />
        <Route path="/loginWithMail" component={LoginForm} />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
