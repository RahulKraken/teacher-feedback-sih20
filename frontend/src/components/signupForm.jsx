import React from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/form.css";

const SignupForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    const name = data.get("name");
    const email = data.get("email");
    const pwd = data.get("pwd");
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
      <Button type="submit">Signup</Button>
    </Form>
  );
};

export default SignupForm;
