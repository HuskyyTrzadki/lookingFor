import StartingPage from "./components/StartingPage";
import study from "./components/study";
import Sport from "./components/Sport";
import Adventure from "./components/Adventure";
import Party from "./components/Party";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
const App = () => {
  return (
    <Router>
      <AuthProvider>
        {" "}
        <Switch>
          <Route exact path="/" component={StartingPage} />
          <Route exact path="/Party" component={Party} />
          <Route exact path="/Sport" component={Sport} />
          <Route exact path="/Adventure" component={Adventure} />
          <Route exact path="/Study" component={study} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
