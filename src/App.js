import StartingPage from "./components/StartingPage";
import study from "./components/Study";
import sport from "./components/Sport";
import adventure from "./components/Adventure";
import party from "./components/Party";
import AddNewPostPage from "./components/AddNewPostPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import AddNewPost from "./components/AddNewPostPage";
const App = () => {
  return (
    <Router>
      <AuthProvider>
        {" "}
        <Switch>
          <Route exact path="/" component={StartingPage} />
          <Route path="/Party" component={party} />
          <Route path="/Sport" component={sport} />
          <Route path="/Adventure" component={adventure} />
          <Route path="/Study" component={study} />
          <Route path="/AddNewPost/:where" component={AddNewPost} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
