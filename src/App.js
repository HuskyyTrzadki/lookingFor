import StartingPage from "./components/StartingPage";
import study from "./components/Study";
import sport from "./components/Sport";
import adventure from "./components/Adventure";
import party from "./components/Party";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
const App = () => {
  return (
    <Router>
      <AuthProvider>
        {" "}
        <Switch>
          <Route exact path="/" component={StartingPage} />
          <Route exact path="/Party" component={party} />
          <Route exact path="/Sport" component={sport} />
          <Route exact path="/Adventure" component={adventure} />
          <Route exact path="/Study" component={study} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
