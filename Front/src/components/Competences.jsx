import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Competences.scss';

const Competences = () => {
  return ( 
    <div className="Competences" id="competences-section">
      <Container className="competences">
        <h1>Les outils que j'utilise...</h1>
        <Row>
          <Col className="tools" lg="5" md="6" sm="12" xs="12">
            <h2>... pour le Front</h2>
            <img className="logos" src="/medias/logos/logo-html.png" alt="logo-html" />
            <img className="logos" src="/medias/logos/logo-css.png" alt="logo-css" />
            <img className="logos" src="/medias/logos/logo-js.png" alt="logo-js" />
            <img className="logos" src="/medias/logos/logo-reactjs.png" alt="logo-reactjs" />
            <img className="logos" src="/medias/logos/logo-sass.png" alt="logo-sass" />
          </Col>
          <Col lg="3" md="3" />
          <Col lg="4" md="3" />
        </Row>
        <Row>
        <Col lg="4" md="3" />
        <Col lg="3" md="3" />
          <Col className="tools" lg="5" md="6" sm="12" xs="12">
          <h2>... et pour le Back</h2>
          <img className="logos" src="/medias/logos/logo-nodejs.png" alt="logo-nodejs" />
            <img className="logos" src="/medias/logos/logo-express.png" alt="logo-express" />
            <img className="logos" src="/medias/logos/logo-mysql.png" alt="logo-mysql" />
            <img className="logos" src="/medias/logos/logo-sql.png" alt="logo-sql" />
          </Col>
        </Row>
      </Container>
    </div>
   );
}
 
export default Competences;