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
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
              <h1>Télécharger mon CV</h1>
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>

        <Row>
          <Col  className="cv" xl="12" lg="12" md="12" sm="12" xs="12">
            <iframe height="430px" max-width="auto" src="/medias/curriculum_vitae.pdf" align="middle" title="cv" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CvPage;