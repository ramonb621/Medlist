import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MedList from "./pages/MedList/MedList";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/meds" component={ MedList } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
