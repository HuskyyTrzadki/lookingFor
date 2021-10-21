import StartingPage from "./components/StartingPage";
import study from "./components/study";
import sport from "./components/sport";
import adventure from "./components/adventure";
import party from "./components/party";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
const App = () => {
  return (
    <Router>
      <AuthProvider>
        {" "}
        <Switch>
          <Route exact path="/" component={StartingPage} />
          <Route exact path="/party" component={study} />
          <Route exact path="/sport" component={sport} />
          <Route exact path="/adventure" component={adventure} />
          <Route exact path="/study" component={party} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
