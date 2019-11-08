import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <Container className="footer">
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" xs="12">
            <a href="https://github.com/DavidPayet" target="_blank" rel="noopener noreferrer">
              <img src="/medias/github-icon.png" className="github-icon" alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/david-payet/" target="_blank" rel="noopener noreferrer">
              <img src="/medias/linkedin-icon.png" className="linkedin-icon" alt="Linkein icon" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" xs="12">
            <p>©Copyright 2019 - All right reserved | Davi<img className="dp-logo" src="/medias/dp-logo.png" alt="dp-logo" />ayet</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;