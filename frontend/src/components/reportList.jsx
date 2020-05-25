import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const ReportList = ({ data, onChange }) => {
  return (
    <ButtonGroup style={{ width: "25rem" }} vertical>
      {data.map((item, index) => {
        return (
          <Button
            key={index}
            className="act btn-block btn-danger"
            onClick={() => onChange(index)}
          >
            {item.time_stamp}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default ReportList;
