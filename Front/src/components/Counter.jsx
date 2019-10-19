import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Counter.scss';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    }
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement() {
    this.setState({
      result: this.state.result - 1
    })
  }

  increment() {
    this.setState({
      result: this.state.result + 1
    })
  }

  render() {
    return (
      <div className="Counter">
        <Container className="counter">
          <Row>
            <Col lg="2" md="2" sm="1" xs="1" />
            <Col lg="8" md="8" sm="10" xs="10">
              <h2>Counter</h2>
              <br />
              <br />
            </Col>
            <Col lg="2" md="2" sm="1" xs="1" />
          </Row>
          <Row>
            <Col lg="2" md="2" sm="1" xs="1" />
            <Col lg="8" md="8" sm="10" xs="10">
              <span>{this.state.result}</span>
            </Col>
            <Col lg="2" md="2" sm="1" xs="1" />
          </Row>
          <br />
          <br />
          <Row>
            <Col lg="4" md="4" sm="2" xs="2" />
            <Col lg="2" md="2" sm="4" xs="4">
              {/*eslint-disable-next-line*/}
              <button onClick={this.decrement}>👎🏽</button>
            </Col>
            <Col lg="2" md="2" sm="4" xs="4">
              {/*eslint-disable-next-line*/}
              <button onClick={this.increment}>👍🏽</button>
            </Col>
            <Col lg="4" md="4" sm="2" xs="2" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Counter;