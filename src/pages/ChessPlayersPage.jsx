import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BackToHome from '../components/BackToHome';

import '../styles/ChessPlayersPage.scss';

const ChessPlayersPage = () => {
  return (
    <div className="ChessPlayersPage">
      <Container className="chessPlayersPage">
        <BackToHome />
        <h2>Demo Chess Players Data</h2>
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