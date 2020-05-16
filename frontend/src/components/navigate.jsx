import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigate extends Component {
  state = {};
  render() {
    return (
      <Navbar
        bg="dark"
        variant="dark"
        collapseOnSelect
        style={{ fontFamily: "Montserrat" }}
      >
        <div className="container">
          <Navbar.Brand>
            <a href="/">SIH20</a>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav pullRight>
              <Nav.Link href="/auth/login">Login/Signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Navigate;
