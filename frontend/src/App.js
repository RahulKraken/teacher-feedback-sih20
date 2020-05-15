import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigate from "./components/navigate";
import Login from "./components/login";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navigate />
        <Router>
          <Switch>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/signup" component={Login} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
