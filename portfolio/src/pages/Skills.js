import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Skills() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>skills.</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>&#9733 &#9733 &#9733 &#9734 &#9734</li>
              <li>&#9733 &#9733 &#9733 &#9734 &#9734</li>
              <li>&#9733 &#9733 &#9733 &#9734 &#9734</li>
              <li>&#9733 &#9733 &#9734 &#9734 &#9734</li>
              <li>SQL</li>
              <li>React</li>
              <li>Photoshop</li>
              <li>Microsoft Office</li>
              <li>&#9733 &#9733 &#9734 &#9734 &#9734</li>
              <li>&#9733 &#9733 &#9734 &#9734 &#9734</li>
              <li>&#9733 &#9733 &#9733 &#9733 &#9733</li>
              <li>&#9733 &#9733 &#9733 &#9733 &#9733</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
