import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiAws, DiGoogleAnalytics, DiPhotoshop } from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiWindows,
  SiWordpress,
  SiNamecheap,
  SiAndroidstudio,
  SiAdobedreamweaver,
  SiAdobepremierepro,
  SiGooglecloud,
  SiAmazonaws,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGoogleAnalytics />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNamecheap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
    </Row>
  );
}

export default Toolstack;
