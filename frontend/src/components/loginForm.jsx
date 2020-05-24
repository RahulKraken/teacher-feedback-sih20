import React from "react";
import { Form } from "react-bootstrap";
import "../styles/form.css";
import { handleLogin } from "../utils/auth";
import FormGroup from "./formComps/formGroup";

const LoginForm = () => {
  return (
    <Form className="loginWindow" onSubmit={handleLogin}>
      <FormGroup
        type="email"
        name="email"
        place="Enter email"
        lbl="Email Address"
      />
      <FormGroup
        type="password"
        name="pswd"
        place="Enter Password"
        lbl="Password"
      />
      <button className="auth-submit" type="submit">
        Login
      </button>
    </Form>
  );
};

export default LoginForm;
