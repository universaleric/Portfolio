import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Artopolis from "../img/Artopolis.jpg";
import Search from "../img/Book Search.jpg";
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
                    <img
                      className="project"
                      src={Artopolis}
                      alt="placeholder"
                    />
                  </a>
                </figure>
                <p className="cap description">
                  Artopolis is an example website that pulls art pieces from
                  the APIs of three museums and displays them on the site.
                </p>
                <p className="cap description filler">
                  Created With: HTML5, CSS3, JavaScript, and Bootstrap
                </p>
                <figcaption className="cap">Book Search</figcaption>
                <figure>
                  <a
                    href="https://glacial-ridge-22785.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="project" src={Search} alt="placeholder" />
                  </a>
                </figure>
                <p className="cap description">
                  This site allows the user to search for books from the Google Books API and save them to a list on a seperate tab.
                </p>
                <p className="cap description filler">
                  Created With: HTML5, CSS3, JavaScript, Mongoose, MongoDB, React, and Bootstrap
                </p>
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
                    <img className="project" src={Planner} alt="placeholder" />
                  </a>
                </figure>
                <p className="cap description">
                  This day planner allows the user to input daily tasks and save
                  them to local storage. Hours are color coded based on the
                  current hour.
                </p>
                <p className="cap description filler">
                  Created With: HTML5, CSS3, JavaScript, and Bootstrap
                </p>
                <figcaption className="cap">Weather Dashboard</figcaption>
                <figure>
                  <a
                    href="https://universaleric.github.io/WeatherDash/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="project" src={Weather} alt="placeholder" />
                  </a>
                </figure>
                <p className="cap description">
                  Weather Dash allows the user to search for the weather of
                  any city and outputs the current weather as well as a five day
                  forecast.
                </p>
                <p className="cap description filler">
                  Created With: HTML5, CSS3, JavaScript, and Bootstrap
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
