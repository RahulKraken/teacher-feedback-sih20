import React from "react";
import { Form } from "react-bootstrap";
import FormGroup from "./formComps/formGroup";
import * as clicks from "../utils/onClicks";

const Choice = ({ id, handleClick, msg, icon, mode, className }) => {
  const op = id === "btn-ns" ? 1 : 2;
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (op === 1) {
      clicks.getSession(data);
    } else {
      clicks.getClassReport(data);
    }
  };
  return (
    <div id={id} className={className} onClick={() => handleClick(mode)}>
      <div className="co">
        <img alt="icon" src={icon} id="icon-btn"></img>
        <h3>{msg}</h3>
      </div>
      <div className="class-form-con">
        <Form className="class-form" onSubmit={handleSubmit}>
          <FormGroup
            type="text"
            name="code"
            place="Enter Classroom Code"
            lbl="Classroom Code"
          />
          <button className="code-btn" type="submit">
            Enter
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Choice;
