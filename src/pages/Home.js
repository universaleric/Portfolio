import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Fade from "react-reveal/Fade";
import Portrait from "../img/Portrait.png";

function Home() {
  return (
    <div className="box">
      <Container>
        <Row>
          <Col size="md-8">
            <Fade left>
              <p className="home">Eric Hay</p>
            </Fade>
          </Col>
          <Col  size="md-4">
            <Fade>
              <img className="portrait" src={Portrait} alt="placeholder" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
