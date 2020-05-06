import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

import './Counter.scss';

const Counter = () => {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount(count - 1)
  }

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className="Counter">
      <Container className="counter">
        <h2>Counter</h2>
        <span className="result">{count}</span>
        <Row className="row">
          <Col xl="4" lg="4" md="4" sm="2" xs="2" />
          <Col xl="2" lg="2" md="2" sm="4" xs="4">
            <AiFillCaretDown
              onClick={decrement}
              className="btn"
            />
          </Col>
          <Col xl="2" lg="2" md="2" sm="4" xs="4">
            <AiFillCaretUp
              onClick={increment}
              className="btn"
            />
          </Col>
          <Col xl="4" lg="4" md="4" sm="2" xs="2" />
        </Row>
      </Container>
    </div>
  );
}

export default Counter;