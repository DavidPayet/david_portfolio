import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-scroll";

import './Header.scss';

function Header() {
  return (
    <div className="Header">
      <Container className="header">
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" xs="12">
            <div className="upPage">
              <img src="/medias/picture5.jpg" alt="background" className="img" />
              <div className="titre">
                <h1 className="lightSpeedIn">
                  David Payet
                </h1>
                <br />
                <h2 className="zoomInUp">
                  Web Developer
                </h2>
              </div>
            </div>
            <Row className="bottom-arrow">
              <Col xl="12" lg="12" md="12" sm="12" xs="12">
                <Link
                  className="arrow"
                  activeClass="active"
                  to="about-section"
                  spy={true}
                  smooth={true}
                  offset={70}
                  duration={500}
                >
                  <span >&#x2303;</span>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header;
