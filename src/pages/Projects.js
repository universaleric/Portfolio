import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Artopolis from "../img/Artopolis.jpg";
import Quiz from "../img/Pointless Quiz.jpg";
import Planner from "../img/Day Planner.jpg";
import Weather from "../img/WeatherDash.jpg";

function Projects() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>projects.</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <figcaption className="cap1">Artopolis</figcaption>
            <figure classNameName="project1">
              <a
                href="https://smilleeymilleey.github.io/Artopolis-/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Artopolis}
                  alt="placeholder"
                  style={{ height: 200, width: 200 }}
                />
              </a>
            </figure>

            <figcaption className="cap2">Pointless Quiz</figcaption>
            <figure className="project2">
              <a
                href="https://universaleric.github.io/Pointless-Quiz/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Quiz}
                  alt="placeholder"
                  style={{ height: 200, width: 200 }}
                />
              </a>
            </figure>
            <figcaption className="cap3">Day Planner</figcaption>
            <figure className="project3">
              <a
                href="https://universaleric.github.io/Day-Planner/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Planner}
                  alt="placeholder"
                  style={{ height: 200, width: 200 }}
                />
              </a>
            </figure>
            <figcaption className="cap4">Weather Dashboard</figcaption>
            <figure className="project4">
              <a
                href="https://universaleric.github.io/WeatherDash/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Weather}
                  alt="placeholder"
                  style={{ height: 200, width: 200 }}
                />
              </a>
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
