import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './About.scss';

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
            <p>Curieux de nature, le métier de développeur web s'est présenté à moi comme une évidence. <em>Ou je me suis présenté à lui ! &#199;a fonctionne aussi dans ce sens !</em></p>
            <p>Ayant le goût du challenge, j'aime relever des défis et trouver des solutions aux problèmes.</p>
            <p>Pour ce faire, j’utilise différents outils illustrés plus bas afin de mettre en &#x153;uvre un site web de A à Z.</p>
            <p>Stimulant ma créativité, ce domaine m'offre l'opportunité d'en apprendre tout les jours en prenant du plaisir.</p>
            <p>Progressant actuellement en totale autonomie, je souhaiterai mettre à profit mes qualités et compétences au sein d'une équipe et ainsi booster mon évolution dans le web.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;