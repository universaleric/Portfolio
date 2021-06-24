import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Fade from "react-reveal/Fade";
import Portrait from "../img/Portrait.png";

function About() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-8">
            <Fade left>
              <p className="about">
                Hey there! I'm a 30 year old web developer from the great state of Texas. I like watching movies and hockey and enjoy reading while listening to smooth jazz. Professionally, I love working with others and collaborating to make the most of our collective talent. I think the little things matter and can make or break the feel and function of a website. Oh, and I have a hedgehog as my assistant.
              </p>
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

export default About;
