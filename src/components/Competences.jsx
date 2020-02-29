import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Competences.scss';

const Competences = () => {
  return (
    <div className="Competences" id="competences-section">
      <Container className="competences">
        <h1>Compétences</h1>
        <Row>
          <Col className="tools" xl="10" lg="10" md="10" sm="8" xs="8">
            <img className="logos" src="/medias/logos/logo-html.png" alt="logo-html" />
            <img className="logos" src="/medias/logos/logo-css.png" alt="logo-css" />
            <img className="logos" src="/medias/logos/logo-js.png" alt="logo-js" />
            <img className="logos" src="/medias/logos/logo-react.png" alt="logo-react" />
            <img className="logos" src="/medias/logos/logo-reactstrap.png" alt="logo-reactstrap" />
            <img className="logos" src="/medias/logos/logo-sass.png" alt="logo-sass" />
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