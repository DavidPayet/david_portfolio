import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './About.scss';

const About = () => {
  return (
    <div className="About" id="about-section">
      <Container className="about">
        <h1>Bonjour, je suis David !</h1>
        <Row>
          <Col xl="4" lg="4" md="4" sm="12" xs="12">
            <img className="photo" src="/medias/photo.png" alt="myphoto" />
          </Col>
          <Col xl="8" lg="8" md="8" sm="12" xs="12">
            <p>En quête de nouvelles aventures, je me réoriente aujourd’hui vers le métier de développeur web.</p>
            <p>Après avoir suivi une formation de 5 mois dans ce domaine, je poursuis mon apprentissage de manière autonome.</p>
            <p>J’utilise différents outils illustrés plus bas afin de mettre en &#x153;uvre un site web de A à Z.</p>
            <p>Ma curiosité et ma soif d’apprendre affectionnent particulièrement l’étendue des possibilités qu’offre ce métier d'aujourd'hui et de demain.</p>
            <p>Je souhaite par ailleurs mettre à profit mes compétences au sein d’une entreprise et ainsi continuer ma progression en apprenant d’avantage grâce à vous.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;