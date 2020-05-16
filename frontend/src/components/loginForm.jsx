import React from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/form.css";

const LoginForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
  }
  return (
    <Form className="loginWindow" onSubmit={handleSubmit}>
      <Form.Group controlID="emailIdForm">
        <Form.Label className="lbl">Email Address</Form.Label>
        <input
          className="field"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group controlID="passwordForm">
        <Form.Label className="lbl">Password</Form.Label>
        <input
          className="field"
          type="password"
          placeholder="Enter Password"
          required
        />
      </Form.Group>
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
