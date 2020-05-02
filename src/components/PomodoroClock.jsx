import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';

import './PomodoroClock.scss';

const SetTimer = ({ type, label, value, handleClick }) => (
  <div>
    <div className="setTimer-label" id={`${type}-label`}>{label}</div>
    <br />
    <div className="setTimer-controls">
      <button
        className="setTimer-controls-btn"
        id={`${type}-increment`}
        onClick={() => handleClick(true, `${type}Value`)}>
        &uarr;
      </button>
      <h3 className="setTimer-value" id={`${type}-length`}>{value}</h3>
      <button
        className="setTimer-controls-btn"
        id={`${type}-decrement`}
        onClick={() => handleClick(false, `${type}Value`)}>
        &darr;
      </button>
    </div>
  </div>
);

const Timer = ({ mode, time }) => (
  <div>
    <h3 className="timer" id="timer-label">{mode === 'session' ? 'Session ' : 'Break '}</h3>
    <h3 className="timer" id="time-left">{time}</h3>
  </div>
);

const Controls = ({ active, handlePlayPause }) => (
  <div>
    <button id="start_stop" onClick={handlePlayPause}>
      {active ? <span>&#10074;&#10074;</span> : <span>&#9658;</span>}
    </button>
  </div>
);

class PomodoroClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakValue: 5,
      sessionValue: 25,
      time: 25 * 60 * 1000,
      active: false,
      mode: 'session'
    }
    this.handleSetTimers = this.handleSetTimers.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidUpdate() {
    if (this.state.time === 0 && this.state.mode === 'session') {
      this.setState({ time: this.state.breakValue * 60 * 1000, mode: 'break' })
    }
    if (this.state.time === 0 && this.state.mode === 'break') {
      this.setState({ time: this.state.sessionValue * 60 * 1000, mode: 'session' })
    }
  }

  handleSetTimers(inc, type) {
    if (inc && this.state[type] === 60) return
    if (!inc && this.state[type] === 1) return
    this.setState({ [type]: this.state[type] + (inc ? 1 : -1) })
  }

  handlePlayPause() {
    if (this.state.active) {
      this.setState({ active: false }, () => clearInterval(this.pomodoro))
    }
    else {
      if (!this.state.touched) {
        this.setState({
          time: this.state.sessionValue * 60 * 1000,
          active: true,
          touched: true
        }, () => this.pomodoro = setInterval(() => this.setState({ time: this.state.time - 1000 }), 1000)
        )
      } else {
        this.setState({
          active: true,
          touched: true
        }, () => this.pomodoro = setInterval(() => this.setState({ time: this.state.time - 1000 }), 1000))
      }
    }
  }

  handleReset() {
    this.setState({
      breakValue: 5,
      sessionValue: 25,
      time: 25 * 60 * 1000,
      active: false,
      mode: 'session',
      touched: false
    })
    clearInterval(this.pomodoro)
  }

  render() {
    return (
      <div className="PomodoroClock">
        <Container className="pomodoroClock">
          <Row>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
              <h2>Pomodoro Clock</h2>
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>
          <Row>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
              <Timer
                className="timer"
                mode={this.state.mode}
                time={moment(this.state.time).format("mm:ss")}
              />
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>
          <Row>
            <Col xl="4" lg="4" md="4" sm="2" xs="2" />
            <Col xl="2" lg="2" md="2" sm="4" xs="4">
              <button id="reset" onClick={this.handleReset}>&#8635;</button>
            </Col>
            <Col xl="2" lg="2" md="2" sm="4" xs="4">
              <Controls
                active={this.state.active}
                handleReset={this.handleReset}
                handlePlayPause={this.handlePlayPause}
              />
            </Col>
            <Col xl="4" lg="4" md="4" sm="2" xs="2" />
          </Row>
          <br />
          <br />
          <Row>
            <Col xl="5" lg="5" md="5" sm="5" xs="5">
              <SetTimer
                type="session"
                label="Session"
                value={this.state.sessionValue}
                handleClick={this.handleSetTimers}
              />
            </Col>
            <Col xl="2" lg="2" md="2" sm="2" xs="2" />
            <Col xl="5" lg="5" md="5" sm="5" xs="5">
              <SetTimer
                type="break"
                label="Break"
                value={this.state.breakValue}
                handleClick={this.handleSetTimers}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PomodoroClock;