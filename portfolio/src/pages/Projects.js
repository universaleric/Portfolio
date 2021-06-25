import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Artopolis from "../img/Artopolis.jpg";
import Quiz from "../img/Pointless Quiz.jpg";
import Planner from "../img/Day Planner.jpg";
import Weather from "../img/WeatherDash.jpg";
import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-6">
          <Fade left cascade>
            <div>
          <figcaption className="cap">Example Museum Website</figcaption>
            <figure>
              <a
                href="https://smilleeymilleey.github.io/Artopolis-/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="project"
                  src={Artopolis}
                  alt="placeholder"
                  style={{ height: 200 }}
                />
              </a>
            </figure>
            <figcaption className="cap">Fun Quiz</figcaption>
            <figure>
              <a
                href="https://universaleric.github.io/Pointless-Quiz/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="project"
                  src={Quiz}
                  alt="placeholder"
                  style={{ height: 200}}
                />
              </a>
            </figure>
            </div>
            </Fade>
          </Col>
          <Col size="md-6">
          <Fade right cascade>
            <div>
            <figcaption className="cap">Day Planner</figcaption>
            <figure>
              <a
                href="https://universaleric.github.io/Day-Planner/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="project"
                  src={Planner}
                  alt="placeholder"
                  style={{ height: 200}}
                />
              </a>
            </figure>
            <figcaption className="cap">Weather Dashboard</figcaption>
            <figure>
              <a
                href="https://universaleric.github.io/WeatherDash/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="project"
                  src={Weather}
                  alt="placeholder"
                  style={{ height: 200}}
                />
              </a>
            </figure>
            </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
