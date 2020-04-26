import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavApp from '../NavApp';

import './CalculatorPage.scss';

class CalculatorPage extends Component {
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
      <div className="CalculatorPage">
        <NavApp />
        <Container className="calculatorPage">
          <Row>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
              <h1>Calculator</h1>
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>

          <Row className="resultat">
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col className="result" xl="8" lg="8" md="8" sm="10" xs="10">
              <span>{this.state.operation}</span>
              <button className="clear-btn"
                value="clear"
                contenu="clear"
                onClick={this.handleClickClear}>
                A/C
              </button>
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>

          <Row>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col className="rowButtons" xl="8" lg="8" md="8" sm="10" xs="10">
              <button value="7" contenu="7" onClick={this.handleClick}>7</button>
              <button value="8" contenu="8" onClick={this.handleClick}>8</button>
              <button value="9" contenu="9" onClick={this.handleClick}>9</button>
              <button value="/" contenu="/" onClick={this.handleClick}>/</button>
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>

          <Row>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col className="rowButtons" xl="8" lg="8" md="8" sm="10" xs="10">
              <button value="4" contenu="4" onClick={this.handleClick}>4</button>
              <button value="5" contenu="5" onClick={this.handleClick}>5</button>
              <button value="6" contenu="6" onClick={this.handleClick}>6</button>
              <button value="*" contenu="X" onClick={this.handleClick}>X</button>
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>

          <Row>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col className="rowButtons" xl="8" lg="8" md="8" sm="10" xs="10">
              <button value="1" contenu="1" onClick={this.handleClick}>1</button>
              <button value="2" contenu="2" onClick={this.handleClick}>2</button>
              <button value="3" contenu="3" onClick={this.handleClick}>3</button>
              <button value="-" contenu="-" onClick={this.handleClick}>-</button>
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>

          <Row>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col className="rowButtons" xl="8" lg="8" md="8" sm="10" xs="10">
              <button value="0" contenu="0" onClick={this.handleClick}>0</button>
              <button value="." contenu="." onClick={this.handleClick}>.</button>
              <button value="=" contenu="=" onClick={this.handleClickEqual}>=</button>
              <button value="+" contenu="+" onClick={this.handleClick}>+</button>
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default CalculatorPage;