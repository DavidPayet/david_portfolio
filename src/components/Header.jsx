import React from 'react';
import { Container, Row } from 'reactstrap';

import '../styles/Header.scss';

function Header() {
  return (
    <div className="Header">
      <Container className="header">
        <div className="inner">
          <Row className="row1">
            <img src="/medias/dp-logo2.png" alt="logo" />
          </Row>
          <Row className="row2">
            <p>DAVID, DEVELOPPEUR WEB</p>
          </Row>
          <Row className="row3">
            <p>JavaScript | ReactJS</p>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Header;