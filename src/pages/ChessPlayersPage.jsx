import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavApp from '../components/NavApp';

import './ChessPlayersPage.scss';

const ChessPlayersPage = () => {
  return (
    <div className="ChessPlayersPage">
      <NavApp />
      <Container className="chessPlayersPage">
        <h1>Demo Chess Players Data</h1>
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