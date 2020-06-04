import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../styles/Calculator.scss';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      operation: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClickEqual = this.handleClickEqual.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
  }

  handleClick(e) {
    this.setState({
      operation: this.state.operation + e.target.value,
    });
  }

  handleClickEqual() {
    this.setState({
      // eslint-disable-next-line 
      operation: eval(this.state.operation),
    });
  }

  handleClickClear() {
    this.setState({
      operation: '',
    })
  }
  render() {
    return (
      <div className="Calculator">
        <Container className="calculator">
          <Row>
            <Col xl="2" lg="2" md="2" sm="0" xs="0" style={{ marginRight: "-1px" }} />
            <Col className="result" xl="8" lg="8" md="8" sm="12" xs="12">
              <span>{this.state.operation}</span>
            </Col>
            <Col xl="2" lg="2" md="2" sm="0" xs="0" />
          </Row>
          <Row>
            <Col xl="2" lg="2" md="2" sm="0" xs="0" />
            <Col className="clear-btn" xl="8" lg="8" md="8" sm="12" xs="12">
              <button
                className="clearBtn"
                value="clear"
                contenu="clear"
                onClick={this.handleClickClear}>Clear</button>
            </Col>
            <Col xl="2" lg="2" md="2" sm="0" xs="0" />
          </Row>
          <Row>
            <Col xl="2" lg="2" md="2" sm="0" xs="0" />
            <Col className="rowButtons" xl="8" lg="8" md="8" sm="12" xs="12">
              <button value="7" contenu="7" onClick={this.handleClick}>7</button>
              <button value="8" contenu="8" onClick={this.handleClick}>8</button>
              <button value="9" contenu="9" onClick={this.handleClick}>9</button>
              <button value="/" contenu="/" onClick={this.handleClick}>/</button>
            </Col>
            <Col xl="2" lg="2" md="2" sm="0" xs="0" />
          </Row>
          <Row>
            <Col xl="2" lg="2" md="2" sm="0" xs="0" />
            <Col className="rowButtons" xl="8" lg="8" md="8" sm="12" xs="12">
              <button value="4" contenu="4" onClick={this.handleClick}>4</button>
              <button value="5" contenu="5" onClick={this.handleClick}>5</button>
              <button value="6" contenu="6" onClick={this.handleClick}>6</button>
              <button value="*" contenu="X" onClick={this.handleClick}>X</button>
            </Col>
            <Col xl="2" lg="2" md="2" sm="0" xs="0" />
          </Row>
          <Row>
            <Col xl="2" lg="2" md="2" sm="0" xs="0" />
            <Col className="rowButtons" xl="8" lg="8" md="8" sm="12" xs="12">
              <button value="1" contenu="1" onClick={this.handleClick}>1</button>
              <button value="2" contenu="2" onClick={this.handleClick}>2</button>
              <button value="3" contenu="3" onClick={this.handleClick}>3</button>
              <button value="-" contenu="-" onClick={this.handleClick}>-</button>
            </Col>
            <Col xl="2" lg="2" md="2" sm="0" xs="0" />
          </Row>
          <Row>
            <Col xl="2" lg="2" md="2" sm="0" xs="0" />
            <Col className="rowButtons" xl="8" lg="8" md="8" sm="12" xs="12">
              <button value="0" contenu="0" onClick={this.handleClick}>0</button>
              <button value="." contenu="." onClick={this.handleClick}>.</button>
              <button value="=" contenu="=" onClick={this.handleClickEqual}>=</button>
              <button value="+" contenu="+" onClick={this.handleClick}>+</button>
            </Col>
            <Col xl="2" lg="2" md="2" sm="0" xs="0" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Calculator;