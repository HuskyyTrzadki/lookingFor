import StartingPage from "./components/StartingPage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";

import { AuthProvider } from "./context/AuthContext";
const App = () => {
  const [user, setUser] = useState("");

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={StartingPage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
