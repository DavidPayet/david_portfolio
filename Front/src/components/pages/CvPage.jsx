import React from 'react';
import { Container, NavLink, Row, Col } from 'reactstrap';

import './CvPage.scss';

const CvPage = () => {
  return (
    <div className="CvPage">
      <Container className="cvPage">
        <Row>
          <NavLink className="home" href="/">
            <img className="dp-logo" src="/medias/dp-logo.png" alt="dp-logo" />
          </NavLink>
        </Row>
        <Row>
            <Col lg="2" md="2" sm="1" xs="1" />
            <Col lg="8" md="8" sm="10" xs="10">
              <h1>Télécharger mon CV</h1>
            </Col>
            <Col lg="2" md="2" sm="1" xs="1" />
          </Row>

        <Row>
          <Col lg="0" md="0" sm="0" xs="0" />
          <Col lg="12" md="12" sm="12" xs="12">
            <iframe height="800px" width="600px" src="/medias/curriculum_vitae.pdf" align="middle" title="cv" />
          </Col>
          <Col lg="0" md="0" sm="0" xs="0" />
        </Row>
      </Container>
    </div>
  );
}

export default CvPage;