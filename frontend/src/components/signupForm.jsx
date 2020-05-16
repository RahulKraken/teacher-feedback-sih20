import React from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/form.css";

const axios = require("axios");

const SignupForm = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    const name = data.get("name");
    const e_mail = data.get("email");
    const pwd = data.get("pwd");
    const url = "/signup";
    const options = {
      method: "POST",
      url: url,
      data: {
        user_name: name,
        email: e_mail,
        pasword: pwd,
      },
    };
    const response = await axios(options);
    const { token, username, email } = response.data;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", username);
    sessionStorage.setItem("email", email);
    setTimeout(function () {
      window.location = "/";
    }, 1200);
  }
  return (
    <Form className="loginWindow" onSubmit={handleSubmit}>
      <Form.Group controlID="nameForm">
        <Form.Label className="lbl">User Name</Form.Label>
        <input
          className="field"
          type="name"
          name="name"
          placeholder="Enter User Name"
          required
        />
      </Form.Group>
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
          name="pwd"
          placeholder="Enter Password"
          required
        />
      </Form.Group>
      <Form.Group controlID="termsForm">
        <input type="checkbox" id="terms" name="terms" required />
        <label className="lbl terms" for="terms">
          I accept the Terms and Conditions
        </label>
      </Form.Group>
      <Button type="submit">Signup</Button>
    </Form>
  );
};

export default SignupForm;
