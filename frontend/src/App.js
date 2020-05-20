import React, { Component } from "react";
import "./App.css";
import "./styles/landing.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigate from "./components/navigate";
import Auth from "./components/auth";
import ProtectedRoute from "./components/protectedRoute";
import Dashboard from "./components/dashboard";
import Landing from "./components/landing";

class App extends Component {
  state = {
    user: "",
    mode: 0,
  };

  componentDidMount() {
    const user = sessionStorage.getItem("user");
    const mode = sessionStorage.getItem("mode");
    this.setState({ user, mode });
  }
  render() {
    const { user, mode } = this.state;
    return (
      <React.Fragment>
        <Navigate user={user} mode={mode} />
        <Router className="router">
          <Switch>
            <Route path="/auth/login" component={Auth} />
            <ProtectedRoute
              path="/my/dashboard"
              render={() => <Dashboard mode={mode} user={user} />}
            />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
