import React from "react";
import { Form, Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import "../styles/form.css";
import { handleSignup } from "../utils/auth";
import FormGroup from "./formComps/formGroup";

const axios = require("axios");

const SignupForm = () => {
  return (
    <Form className="loginWindow" onSubmit={handleSignup}>
      <FormGroup
        type="name"
        name="name"
        place="Enter User Name"
        lbl="Username"
      />
      <FormGroup
        type="email"
        name="email"
        place="Enter email"
        lbl="Email Address"
      />
      <FormGroup
        type="password"
        name="pwd"
        place="Enter Password"
        lbl="Password"
      />
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
