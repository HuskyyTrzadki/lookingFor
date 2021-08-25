import StartingPage from "./components/StartingPage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { UserContext } from "./context/UserContext";
const App = () => {
  const [user, setUser] = useState("");

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route exact path="/" component={StartingPage} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
