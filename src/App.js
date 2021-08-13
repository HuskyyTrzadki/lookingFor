import StartingPageInit from "./components/StartingPageInit";
import { BrowserRouter, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
const App = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default App;
