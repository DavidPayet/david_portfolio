import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from '@material-ui/core/Button';
import { GrMysql } from 'react-icons/gr';
import { DiJsBadge, DiSass, DiReact, DiHtml5, DiCss3, DiNodejsSmall, DiBootstrap } from "react-icons/di";

import '../styles/Competences.scss';

const Competences = () => {
  return (
    <div className="Competences" id="competences-section">
      <Container className="competences">
        <Row>
          <Col xl="6" lg="6" md="6" sm="12" xs="12" className="text">
            <Row className="sub-title">
              <h2>Compétences</h2>
            </Row>
            <Row>
              <p>Les technologies utilisées :</p>
              <p>JavaScript, ReactJS, Scss, HTML5, CSS3, Bootstrap/Reactstrap, MySQL/SQL, NodeJS/Express.</p>
            </Row>
          </Col>
          <Col className="tools" xl="6" lg="6" md="6" sm="8" xs="8">
            <DiJsBadge className="logo js" />
            <DiReact className="logo react" />
            <DiSass className="logo sass" />
            <DiHtml5 className="logo html" />
            <DiCss3 className="logo css" />
            <DiBootstrap className="logo bootstrap" />
            <GrMysql className="logo mysql" />
            <DiNodejsSmall className="logo node" />
          </Col>
        </Row>
        <Row>
          <Button variant="outlined" href="/cv" >
            Vers mon CV
              </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Competences;