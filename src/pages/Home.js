import React from "react";
import Container from "../components/Container";
import RowHome from "../components/RowHome";
import Col from "../components/Col";
import Fade from "react-reveal/Fade";
import Portrait from "../img/Portrait.png";

function Home() {
  return (
    <div className="box">
      <Container>
        <RowHome>
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
        </RowHome>
      </Container>
    </div>
  );
}

export default Home;
