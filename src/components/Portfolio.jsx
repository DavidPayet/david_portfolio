import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ToDoListCard from './ToDoListCard';
import GifCard from './GifCard';
import CalculatorCard from './CalculatorCard';
import TimerCard from './TimerCard';
import SnakeCard from './SnakeCard';
import TicTacToeCard from './TicTacToeCard';
import ChessPlayersCard from './ChessPlayersCard';

import './Portfolio.scss';

const Portfolio = () => {
  return (
    <div className="Portfolio" id="portfolio-section">
      <Container className="portfolio">
        <h1>Quelques réalisations...</h1>
        <Row>
          <Col xl="3" lg="3" md="4" sm="12" xs="12">
            <ToDoListCard />
          </Col>
          <Col xl="3" lg="3" md="4" sm="12" xs="12">
            <GifCard />
          </Col>
          <Col xl="3" lg="3" md="4" sm="12" xs="12">
            <CalculatorCard />
          </Col>
          <Col xl="3" lg="3" md="4" sm="12" xs="12">
            <TimerCard />
          </Col>
          <Col xl="3" lg="3" md="4" sm="12" xs="12">
            <TicTacToeCard />
          </Col>
          <Col xl="3" lg="3" md="4" sm="12" xs="12">
            <SnakeCard />
          </Col>
          <Col xl="3" lg="3" md="4" sm="12" xs="12">
            <ChessPlayersCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;