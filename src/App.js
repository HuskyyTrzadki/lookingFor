import StartingPage from "./components/StartingPage";
import Sstudy from "./components/Sstudy";
import sSport from "./components/Ssport";
import Sadventure from "./components/Sadventure";
import Sparty from "./components/Sparty";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";

import { AuthProvider } from "./context/AuthContext";
const App = () => {
  const [user, setUser] = useState("");

  return (
    <Router>
      <AuthProvider>
        {" "}
        <Switch>
          <Route exact path="/" component={StartingPage} />
          <Route exact path="/party" component={Sstudy} />
          <Route exact path="/sport" component={Ssport} />
          <Route exact path="/adventure" component={Sadventure} />
          <Route exact path="/study" component={Sparty} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
