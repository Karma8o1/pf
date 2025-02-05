import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiMicrosoftsqlserver,
  SiAzurepipelines,
  SiApachekafka,
  SiApachecloudstack,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachecloudstack/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzurepipelines />
      </Col>
    </Row>
  );
}

export default Toolstack;
