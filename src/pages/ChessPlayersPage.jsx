import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavApp from '../components/NavApp';

import './ChessPlayersPage.scss';

const ChessPlayersPage = () => {
  return (
    <div className="ChessPlayersPage">
      <NavApp />
      <Container className="chessPlayersPage">
        <Row>
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          <Col xl="8" lg="8" md="8" sm="10" xs="10">
            <h1>Demo Chess Players Data</h1>
          </Col>
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
        </Row>
        <Row>
          <Col xl="1" lg="1" md="1" sm="1" xs="1" />
          <Col xl="10" lg="10" md="10" sm="10" xs="10">
            <video src="/medias/demo_chess_players.mp4" controls className="demovid"></video>
          </Col>
          <Col xl="1" lg="1" md="1" sm="1" xs="1" />
        </Row>
      </Container>
    </div>
  );
}

export default ChessPlayersPage;