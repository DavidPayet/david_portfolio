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
              <h2>Counter</h2>
              <span className="result">{this.state.result}</span>
          <Row className="row">
            <Col xl="4" lg="4" md="4" sm="2" xs="2" />
            <Col xl="2" lg="2" md="2" sm="4" xs="4">
              {/*eslint-disable-next-line*/}
              <button onClick={this.decrement}>👎🏽</button>
            </Col>
            <Col xl="2" lg="2" md="2" sm="4" xs="4">
              {/*eslint-disable-next-line*/}
              <button onClick={this.increment}>👍🏽</button>
            </Col>
            <Col xl="4" lg="4" md="4" sm="2" xs="2" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Counter;