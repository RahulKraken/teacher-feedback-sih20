import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigate from "./components/navigate";
import Auth from "./components/auth";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navigate />
        <Router>
          <Switch>
            <Route path="/auth/login" component={Auth} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
