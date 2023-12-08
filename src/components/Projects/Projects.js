import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import saucedemo from "../../Assets/Projects/saucedemo.png";
import realworldapp from "../../Assets/Projects/realworldapp.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import realworldauto from "../../Assets/Projects/realworldauto.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saucedemo}
              isBlog={false}
              title="saucedemo-automation"
              description="Developed an automation testing project using Selenium, Mocha, and TypeScript, focusing on robust testing frameworks and CI/CD implementation. This project, hosted on GitHub at 'saucedemo-workspace-automation', demonstrates advanced testing strategies and continuous integration/deployment processes, aiming to enhance software quality and deployment efficiency."
              ghLink="https://github.com/AxelAlinsky/saucedemo-workspace-automation"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realworldapp}
              isBlog={false}
              title="real-world-app"
              description="Created the real-world-app, a React.js website on GitHub ('realworldApp-workspace-automation'), designed for demonstrating advanced automation testing with Selenium, Mocha, and TypeScript and more. This project serves as a testbed for CI/CD practices, emphasizing software quality and efficient deployment, showcasing a practical approach to robust web application testing."
              ghLink="https://github.com/AxelAlinsky/realworld-app"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realworldauto}
              isBlog={false}
              title="real-world-app"
              description="Developed a comprehensive automation script for the real-world-app, using Mocha and TypeScript to ensure thorough testing and reliability. Hosted on GitHub, this script is part of 'realworldApp-workspace-automation', designed to rigorously test the React.js-based web application. It exemplifies best practices in automated testing, contributing significantly to the CI/CD pipeline and enhancing overall software quality."
              ghLink="https://github.com/AxelAlinsky/realworldApp-workspace-automation"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
