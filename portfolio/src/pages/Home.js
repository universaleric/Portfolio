import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Portrait from "../img/Portrait.png";

function Home() {
  return (
    <div>
      <Container style={{ marginTop: 50 }}>
        <Row>
          <Col size="md-8">
            <p className="home">Eric Hay</p>
          </Col>
          <Col className="portrait" size="md-4">
            <img
              src={Portrait}
              alt="placeholder"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
