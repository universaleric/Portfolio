import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Fade from "react-reveal/Fade";
import Portrait from "../img/Portrait.png";

function Contact() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-8">
            <Fade left cascade>
              <ul className="list listContact">
                <li className="contact">
                  <i class="fas fa-phone"></i> (972).955.2176
                </li>
                <li className="contact">
                  <i className="fas fa-envelope"></i> ericdanielhay@yahoo.com
                </li>
                <li className="contact">
                  <i class="fab fa-github"></i>{" "}
                  <a href="https://www.github.com/universaleric">
                    Github Account
                  </a>
                </li>
                <li className="contact">
                  <i className="fab fa-linkedin"></i>{" "}
                  <a href="https://www.linkedin.com/in/eric-hay-06b03371">
                    LinkedIn Profile
                  </a>
                </li>
                <li className="contact">
                  <i className="fas fa-file"></i>{" "}
                  <a href="https://drive.google.com/file/d/1AgcHLaYvDNc_X-yhcfJyPAQp51-1tN9M/view?usp=sharing">
                    Resume
                  </a>
                </li>
              </ul>
            </Fade>
          </Col>
          <Col size="md-4">
            <Fade>
              <img className="portrait" src={Portrait} alt="placeholder" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
