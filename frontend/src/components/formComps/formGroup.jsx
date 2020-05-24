import React from "react";
import { Form } from "react-bootstrap";

const FormGroup = ({ type, name, place, lbl }) => {
  return (
    <Form.Group>
      <Form.Label className="lbl">{lbl}</Form.Label>
      <input
        className="field"
        type={type}
        name={name}
        placeholder={place}
        required
      />
    </Form.Group>
  );
};

export default FormGroup;
