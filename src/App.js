import StartingPageInit from "./components/StartingPageInit";
import { BrowserRouter, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
const App = () => {
  const [user, setUser] = useState("");

  return (
    <div>
      <p>hello {user}</p>
      <LoginPage Login={setUser} />
    </div>
  );
};

export default App;
