import React from "react";
import { Accordion } from "react-bootstrap";

export const Result = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Ваш список литературы</Accordion.Header>
        <Accordion.Body>Пока ничего нет...</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
