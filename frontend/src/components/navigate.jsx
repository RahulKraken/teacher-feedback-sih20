import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/navigate.css";
import { ReactComponent as Tcon } from "../svg/045-teacher.svg";
import { ReactComponent as Ocon } from "../svg/044-student.svg";

const Navigate = ({ user, mode }) => {
  const Icon = mode === "1" ? Tcon : Ocon;

  const [drop, setDrop] = useState(1);

  const handleDrop = (e) => {
    e.preventDefault();

    const x = document.getElementById("drop").style;
    if (drop === 1) {
      x.visibility = "visible";
      x.opacity = "100%";
    } else {
      x.opacity = "0";
      setTimeout((x.visibility = "collapse"), 1000);
    }

    setDrop(-1 * drop);
  };

  const handleLogout = (e) => {
    e.preventDefault();

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("mode");
    sessionStorage.removeItem("user");
    window.location = "/";
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        style={{
          background: "#00000000",
          fontFamily: "Montserrat",
          zIndex: "10",
        }}
      >
        <div className="container">
          <Navbar.Brand>
            <a href="/" id="brand">
              SIH20
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav pullright="true">
              {user !== null ? (
                <button id="db-btn" onClick={handleDrop}>
                  <Icon className="prcon" />
                </button>
              ) : (
                <Nav.Link href="/auth/login">Login/Signup</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div id="drop">
        <Icon id="proImg"></Icon>
        <h1 style={{ fontSize: "34px", textAlign: "center" }}>{user}</h1>
        <p style={{ fontSize: "10px", textAlign: "center" }}>
          {mode === "1" ? "Teacher" : "Officer"}
        </p>
        <a href="/my/dashboard" id="dash-btn">
          Dashboard
        </a>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navigate;
