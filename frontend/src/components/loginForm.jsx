import React from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/form.css";

const axios = require("axios");

const LoginForm = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    const e_mail = data.get("email");
    const pwd = data.get("pswd");
    const url = "/login";
    const options = {
      method: "POST",
      url: url,
      data: {
        email: e_mail,
        pasword: pwd,
      },
    };
    try {
      const response = await axios(options);
      console.log(response.status);
      const { token, username, is_teacher } = response.data;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", username);
      sessionStorage.setItem("mode", is_teacher ? 1 : 2);
      setTimeout(function () {
        window.location = "/my/dashboard";
      }, 1200);
    } catch (e) {
      alert(e.response.data);
    }
  }
  return (
    <Form className="loginWindow" onSubmit={handleSubmit}>
      <Form.Group controlID="emailIdForm">
        <Form.Label className="lbl">Email Address</Form.Label>
        <input
          className="field"
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group controlID="passwordForm">
        <Form.Label className="lbl">Password</Form.Label>
        <input
          className="field"
          type="password"
          name="pswd"
          placeholder="Enter Password"
          required
        />
      </Form.Group>
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
