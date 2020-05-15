import React from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/login.css";
import webBg from "../images/loginweb.jpg";
import mobileBg from "../images/loginphone.jpg";

const Login = () => {
  const imageUrl = window.innerWidth >= 650 ? webBg : mobileBg;
  const bd = document.body;
  bd.style.backgroundImage = "url('" + imageUrl + "')";
  return (
    <div>
      <Form className="loginWindow">
        <Form.Group controlID="emailIdForm">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlID="passwordForm">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
