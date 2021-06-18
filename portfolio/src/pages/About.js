import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>about me.</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Hello! I'm a 30 year old web developer hailing from the good ol'
              state of Texas. I love working with others and collaborating to
              make the most of our collective talent. I think the little things
              matter and can make or break the feel and function of a website.
              Oh, and I have a hedgehog as my assistant.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
