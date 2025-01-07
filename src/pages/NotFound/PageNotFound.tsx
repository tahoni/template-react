import React, { ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import { NotFound } from "../../components";

export const PageNotFound = React.memo((): ReactElement => {
  return (
    <>
      <Row>
        <Col>
          <h2>Page Not Found</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <NotFound message="the page you are looking for does not exist" />
        </Col>
      </Row>
    </>
  );
});
