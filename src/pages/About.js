import React from "react";
import Container from "../components/Container";
import RowAbout from "../components/RowAbout";
import Col from "../components/Col";
import Fade from "react-reveal/Fade";
import Hedgehog from "../img/Hedgehog.png";

function About() {
  return (
    <div>
      <Container>
        <RowAbout>
              <Col size="md-4">
                <Fade>
                  <img className="hedgehog" src={Hedgehog} alt="placeholder" />
                </Fade>
              </Col>
              <Col size="md-8">
                <Fade right cascade>
                  <div>
                    <p className="about">
                      I’m a web developer living in the great state of Texas. I
                      believe the littlest of details matter, especially when it
                      comes to the feel and function of a website. I strive to
                      create intuitive, delightful experiences that not only
                      look great, but function seamlessly as well.{" "}
                    </p>

                    <p className="about">
                      {" "}
                      I’m no stranger to complex problem solving and creating
                      great experiences. In my prior life, I worked in the
                      restaurant industry, triaging problems on the fly, in a
                      fast-paced environment in order to make sure every
                      employee under my care felt supported and every customer
                      left happy.{" "}
                    </p>

                    <p className="about">
                      I prefer to work on collaborative teams where each person
                      can bring their strengths together under a unified vision.
                      How might we get started re-imagining your digital
                      experience? Looking forward to connecting with you soon!
                    </p>
                  </div>
                </Fade>
              </Col>
        </RowAbout>
      </Container>
    </div>
  );
}

export default About;
