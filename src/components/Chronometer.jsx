import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ChronometerElapsedTime from './ChronometerElapsedTime';
import ChronometerButton from './ChronometerButton';

import '../styles/Chronometer.scss';

class Chronometer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timingEvents: [],
      nonce: 0
    }
    this.addTimerEvent = this.addTimerEvent.bind(this);
    this.tick = this.tick.bind(this);
    this.poll = setInterval(this.tick, 1000);
    this.resetClick = this.resetClick.bind(this);
  }

  addTimerEvent() {
    this.setState({
      timingEvents: [
        ...this.state.timingEvents,
        new Date()
      ]
    })
  }

  tick() {
    this.setState((prevState) => ({
      nonce: prevState.nonce + 1
    }))
  }

  resetClick() {
    this.setState({
      timingEvents: []
    })
  }

  render() {
    return (
      <div className="Chronometer">
        <Container className="chronometer">
          <Row>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
              <h2>Chronometer</h2>
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>
          <Row>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
              <ChronometerElapsedTime
                timingEvents={this.state.timingEvents}
              />
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>
          <Row>
            <Col xl="4" lg="4" md="4" sm="2" xs="2" />
            <Col xl="2" lg="2" md="2" sm="4" xs="4">
              <button onClick={this.resetClick}>&#8635;</button>
            </Col>
            <Col xl="2" lg="2" md="2" sm="4" xs="4">
              <ChronometerButton
                handleClick={this.addTimerEvent}
                timingEvents={this.state.timingEvents}
              />
            </Col>
            <Col xl="4" lg="4" md="4" sm="2" xs="2" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Chronometer;