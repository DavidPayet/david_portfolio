import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BackToHome from '../components/BackToHome';

import '../styles/CvPage.scss';

const CvPage = () => {
  return (
    <div className="CvPage">
      <Container className="cvPage">
        <BackToHome />
        <h2>Curriculum Vitae</h2>
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" xs="12">
            <iframe src="/medias/curriculum_vitae.pdf" title="cv" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CvPage;