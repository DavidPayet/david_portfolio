import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaGithub, FaLinkedin } from "react-icons/fa";

import '../styles/Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <Container className="footer">
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" xs="12">
            <a href="https://github.com/DavidPayet" target="_blank" rel="noopener noreferrer">
              <FaGithub className="iconsLinks" />
            </a>
            <a href="https://www.linkedin.com/in/david-payet/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="iconsLinks" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" xs="12">
            <p>©Copyright 2020 - All right reserved | Davi<img className="dp-logo" src="/medias/dp-logo2.png" alt="dp-logo" />ayet</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;