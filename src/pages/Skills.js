import React, { useState } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Spin from "react-reveal/Spin";
import Fade from "react-reveal/Fade";
import Portrait from "../img/Portrait.png";

function Skills() {
  const [hover, setHover] = useState(false);

  const handleHover = () => setHover(!hover);

  return (
    <div>
      <Container>
        <Row>
          <Col size="md-8">
            <Fade left cascade>
              <ul className="list">
                <li>
                  HTML5{" "}
                </li>
                <li>
                  CSS{" "}
                </li>
                <li>
                  Javascript{" "}
                </li>
                <li>
                  MongoDB{" "}
                </li>
                <li>
                  MySQL{" "}
                </li>
                <li>
                  React.js{" "}
                </li>
                <li>
                  Node.js{" "}
                </li>
                <li>
                  Photoshop{" "}
                </li>
              </ul>
            </Fade>
          </Col>
          <Col size="md-4">
            <Fade>
              <img className="portrait skillPortrait mobilePortrait" src={Portrait} alt="placeholder" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
