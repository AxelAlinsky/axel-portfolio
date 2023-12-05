import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import myImg from "../../Assets/hi.webp";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function home2() {
  const experiences = [
    {
      companyName: "Lunch Actually",
      role: "Quality Assurance",
      duration: "Jan 2021 - Dec 2022",
      description: "Conducted quality assurance testing for mobile applications (Android and iOS), CRM, and websites, designed automation scripts for CRM, led the QA team and scrum meetings, and collaborated with cross-functional teams, significantly enhancing user experience, efficiency, and team performance."
    },
    {
      companyName: "Fuse Insurtech",
      role: "Sr. Quality Assurance",
      duration: "Jan 2023 - Mar 2023",
      description: "Designed and executed test cases for Android mobile apps, documented and tracked bugs using Google Sheets and Docs, collaborated with tech and sales teams to address bug fixes, discuss new features, and understand customer needs, contributing to increased customer satisfaction and sales."
    },
    {
      companyName: "Refinitiv",
      role: "Sr. QA Automation Engineer",
      duration: "April 2023 - Dec 2023",
      description: `Developed and maintained TypeScript-based automated testing procedures and scripts, continuously refined methodologies, and managed CI/CD pipelines to enhance efficiency, reliability, and consistency in the software development lifecycle.`
    },
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <h1 className="home-about-description">My <b className="purple">Professional</b> Experience</h1>
        <Row>
          {experiences.map((experience, index) => (
            <Col md={4} key={index} className="home-about-description">
              <h3 className="purple"><b>{experience.companyName}</b></h3>
              <p className="role">{experience.role}</p>
              <p className="duration">{experience.duration}</p>
              <p className="description">{experience.description}</p>
            </Col>
          ))}
        </Row>
        <Row>
          <Button style={{ width: '200px', margin: '0 auto', display: 'block' }} variant="primary" href="/resume">See my resume</Button>
        </Row>
      </Container>
    </Container>
  );
}

export default home2;
