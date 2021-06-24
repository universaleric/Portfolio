import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Fade from "react-reveal/Fade";
import Portrait from "../img/Portrait.png";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-8">
            <Fade left>
              <p className="home">Eric Hay</p>
            </Fade>
          </Col>
          <Col className="portrait" size="md-4">
            <Fade>
              <img src={Portrait} alt="placeholder" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
