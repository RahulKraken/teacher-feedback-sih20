import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";

const Cards = ({ n, body, que }) => {
  return (
    <Card>
      <Accordion.Toggle className="c-toggle" as={Card.Header} eventKey={n}>
        {`${n + 1}. ${que}`}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={n}>
        <Card.Body>{body}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default Cards;
