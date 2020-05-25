import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const ReportList = ({ data, onChange }) => {
  let n = -1;
  return (
    <ButtonGroup style={{ width: "25rem" }} vertical primary>
      {data.map((item, index) => {
        ++n;
        return (
          <Button
            className="act btn-block btn-danger"
            secondary
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
