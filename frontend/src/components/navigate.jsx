import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigate extends Component {
  state = {};
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Brand>
          <a to="/">SIH20</a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav pullRight>
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigate;
