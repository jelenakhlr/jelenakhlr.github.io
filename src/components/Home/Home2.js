import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/jk-profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">

              I am doing a <b className="purple"> Ph.D. </b> in experimental astroparticle physics at the Karlsruhe
              Institute of Technology, where I mostly focus on direct <b className="purple">radio detection</b> of cosmic rays.
              <br /><br/>
              My research focuses on <b className="purple">novel radio techniques</b> for cosmic ray air showers. This rapidly growing field allows cost-effective deployment of large detector arrays like GRAND. However, current radio trigger systems, relying solely on timing information, struggle with background.
              <br/><br/>
              To address this, I'm developing a novel <b className="purple"> event-level trigger </b> for GRAND that analyzes the radio footprint - the spatial distribution of signal strength across triggered antennas. This approach offers a more comprehensive picture of the event, improving background rejection and sensitivity.
              <br /><br/>
              My work explores multiple techniques to analyze the footprint, including <b className="purple"> deriving formulas</b>, analyzing <b className="purple"> simulations</b>, and leveraging <b className="purple">machine learning</b>. This research presents the first comprehensive exploration of the radio footprint for event-level triggering, with the potential to significantly enhance GRAND's capabilities.
              I'm actively developing and testing these methods with simulated data, aiming for future implementation on real measurements. This work paves the way for improved event selection in next-generation cosmic ray experiments by unlocking the power of the radio footprint.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={homeLogo} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jelenakhlr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/*<li className="social-icons">*/}
              {/*  <a*/}
              {/*    href="https://twitter.com/Soumyajit4419"*/}
              {/*    target="_blank"*/}
              {/*    rel="noreferrer"*/}
              {/*    className="icon-colour  home-social-icons"*/}
              {/*  >*/}
              {/*    <AiOutlineTwitter />*/}
              {/*  </a>*/}
              {/*</li>*/}

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jelena-koehler/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/*<li className="social-icons">*/}
              {/*  <a*/}
              {/*    href="https://www.instagram.com/soumyajit4419"*/}
              {/*    target="_blank"*/}
              {/*    rel="noreferrer"*/}
              {/*    className="icon-colour home-social-icons"*/}
              {/*  >*/}
              {/*    <AiFillInstagram />*/}
              {/*  </a>*/}
              {/*</li>*/}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
