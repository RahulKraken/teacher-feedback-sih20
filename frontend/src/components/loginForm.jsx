import React from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/form.css";
import { handleLogin } from "../utils/auth";
import FormGroup from "./formComps/formGroup";

const axios = require("axios");

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
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
