import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavApp from '../components/NavApp';

import './CvPage.scss';

const CvPage = () => {
  return (
    <div className="CvPage">
      <NavApp />
      <Container className="cvPage">
        <h1>Télécharger mon CV</h1>
        <Row>
          <Col className="cv" xl="12" lg="12" md="12" sm="12" xs="12">
            <iframe height="1200px" width="100%" src="/medias/curriculum_vitae.pdf" align="middle" title="cv" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CvPage;