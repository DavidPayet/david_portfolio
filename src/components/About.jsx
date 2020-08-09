import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../styles/About.scss';

const About = () => {
  return (
    <div className="About" id="about-section">
      <Container className="about">
        <Row>
          <Col xl="4" lg="4" md="4" sm="12" xs="12" className="photo-col">
            <img className="photo" src="/medias/photo.png" alt="myphoto" />
          </Col>
          <Col xl="8" lg="8" md="8" sm="12" xs="12" className="text">
            <Row className="sub-title">
              <h2>A PROPOS</h2>
            </Row>
            <Row>
              <p>Après 10 ans d'une expérience militaire, je me reconvertis dans le développement web en choisissant JavaScript et ReactJS pour mes débuts.</p>
              <p>Progressant actuellement de manière autonome, je souhaite partager mes qualités et compétences au sein d'une équipe pour un travail collaboratif et répondre aux besoins des clients.</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;