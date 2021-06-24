import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Contact() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>contact.</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <ul>
              <li>email: ericdanielhay@yahoo.com</li>
              <li>phone: (972).955.2176</li>
              <li>github: github.com/universaleric</li>
              <li>LinkedIn: www.linkedin.com/in/eric-hay-06b03371</li>
              <li>
                Resume: <a href="../img/Resume.pdf">Eric Hay</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
