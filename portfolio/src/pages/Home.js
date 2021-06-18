import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-6">
            <h1>Eric Hay</h1>
          </Col>
          <Col size="md-6">
            <h1>Test Text</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
