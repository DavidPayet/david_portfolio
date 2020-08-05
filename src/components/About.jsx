import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../styles/About.scss';

const About = () => {
  return (
    <div className="About" id="about-section">
      <Container className="about">
        <h1>A Propos</h1>
        <Row>
          <Col xl="4" lg="4" md="4" sm="12" xs="12">
            <img className="photo" src="/medias/photo.png" alt="myphoto" />
          </Col>
          <Col xl="8" lg="8" md="8" sm="12" xs="12">
            <p>De nature curieuse, je me suis intéressé au métier de développeur web.</p>
            <p>Le challenge et les défis de ce domaine font désormais partis de mon quotidien et les obstacles franchis m'apportent satisfactions <em>(Courtes certes, mais ça vaut le coup :)</em>.</p>
            <p>J’utilise différents outils illustrés plus bas afin de mettre en &#x153;uvre un site web de A à Z.</p>
            <p>Véritable stimulant créatif, le développement web m'offre l'opportunité d'en apprendre tout les jours tout en prenant du plaisir.</p>
            <p>Progressant actuellement de manière autonome, je souhaiterai partager mes qualités et compétences au sein d'une équipe pour un travail collaboratif, être confronter aux besoins des entreprises et faire de ma nouvelle passion mon métier.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;