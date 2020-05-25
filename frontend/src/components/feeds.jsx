import React from "react";
import { Card, Accordion } from "react-bootstrap";

const Feeds = ({ _id, que }) => {
  return (
    <Card>
      <Accordion.Toggle
        danger
        className="f-head"
        as={Card.Header}
        eventKey={_id}
      >
        {`${_id}. ${que}`}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={_id}>
        <Card.Body>
          <textarea
            type="text"
            name={_id}
            required
            className="txt-are"
          ></textarea>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default Feeds;
