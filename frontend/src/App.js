import React, { Component } from "react";
import "./App.css";
import Navigate from "./components/navigate";
import { Jumbotron } from "react-bootstrap";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navigate />
        <main className="container">
          <Jumbotron>Hello. Welcome to SIH20.</Jumbotron>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
