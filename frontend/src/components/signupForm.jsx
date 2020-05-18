import React from "react";
import { Form, Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import "../styles/form.css";

const axios = require("axios");

const SignupForm = () => {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    let isTeacher = false;
    let isOfficer = false;
    const name = data.get("name");
    const e_mail = data.get("email");
    const pwd = data.get("pwd");
    if (data.get("options") == 1) {
      isOfficer = true;
    } else isTeacher = true;

    const url = "/signup";
    const options = {
      method: "POST",
      url: url,
      data: {
        user_name: name,
        email: e_mail,
        pasword: pwd,
        is_teacher: isTeacher,
        is_officer: isOfficer,
      },
    };
    let mode = 1;
    try {
      const response = await axios(options);
      console.log(response.data);
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
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton value={1}>Official</ToggleButton>
        <ToggleButton value={2}>Teacher</ToggleButton>
      </ToggleButtonGroup>
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
