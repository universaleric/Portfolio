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
                <li onMouseOver={handleHover}>
                  HTML5{" "}
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                </li>
                <li onMouseOver={handleHover}>
                  CSS{" "}
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                </li>
                <li onMouseOver={handleHover}>
                  Javascript{" "}
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                </li>
                <li onMouseOver={handleHover}>
                  MongoDB{" "}
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="far fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="far fa-star"></i>
                  </Spin>
                </li>
                <li onMouseOver={handleHover}>
                  MySQL{" "}
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="far fa-star"></i>
                  </Spin>
                </li>
                <li onMouseOver={handleHover}>
                  React.js{" "}
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="far fa-star"></i>
                  </Spin>
                </li>
                <li onMouseOver={handleHover}>
                  Node.js{" "}
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="far fa-star"></i>
                  </Spin>
                </li>
                <li onMouseOver={handleHover}>
                  Photoshop{" "}
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                  <Spin when={hover}>
                    <i className="fas fa-star"></i>
                  </Spin>
                </li>
              </ul>
            </Fade>
          </Col>
          <Col size="md-4">
            <Fade>
              <img className="portrait mobilePortrait" src={Portrait} alt="placeholder" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
