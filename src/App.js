import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Title from "./components/Title/Title";
import MedList from "./pages/MedList/MedList";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import './App.css';
import { SignIn } from "./components/Inputs/Inputs";

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Switch>
          <Route exact path="/" component={ MedList } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/signup" component={ SignUp } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
