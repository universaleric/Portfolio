import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Spin from "react-reveal/Spin";

function Skills() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-6">
            <ul>
              <li>
                HTML{" "}
                <Spin>
                  <i class="fas fa-star"></i>
                </Spin>
                <Spin>
                  <i class="fas fa-star"></i>
                </Spin>
                <Spin>
                  <i class="fas fa-star"></i>
                </Spin>
              </li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Python</li>
            </ul>
          </Col>
          <Col size="md-6">
            <ul>
              <li>SQL</li>
              <li>React</li>
              <li>Photoshop</li>
              <li>Microsoft Office</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
