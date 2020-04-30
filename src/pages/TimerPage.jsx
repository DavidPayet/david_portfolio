import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavApp from '../components/NavApp';

import Counter from '../components/Counter';
import Chronometer from '../components/Chronometer';
import PomodoroClock from '../components/PomodoroClock';

import './TimerPage.scss';

class TimerPage extends Component {

  render() { 
    return ( 
      <div className="TimerPage">
        <NavApp />
        <Container className="timerPage">
          <Row>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
              <h1>Timers</h1>
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>
          <Row>
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
              <Counter />
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>
          <br />
          <br />
          <br />
          <br />
          <Row>
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
              <Chronometer />
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>
          <br />
          <br />
          <br />
          <br />
          <Row>
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
              <PomodoroClock />
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>
        </Container>
      </div>
     );
  }
}
 
export default TimerPage;