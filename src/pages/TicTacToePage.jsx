import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TicTacToeBoard from '../components/TicTacToeBoard';
import NavApp from '../components/NavApp';

import './TicTacToePage.scss';

export default class TicTacToePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      stepNumber: 0,
      history: [
        { squares: Array(9).fill(null) }
      ]
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat({
        squares: squares
      }),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to #' + move : 'Reset';
      return (
        <li key={move}>
          <button onClick={() => { this.jumpTo(move) }}>
            {desc}
          </button>
        </li>
      )
    });
    let status;
    if (winner) {
      status = winner + ' à gagné !';
    } else {
      status = 'Le tour est à : ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="TicTacToePage">
        <NavApp />
        <Container className="ticTacToePage">
          <h1>Tic Tac Toe</h1>
          <h3>{status}</h3>
          <Row>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col className="game" xl="8" lg="8" md="8" sm="10" xs="10">
              <TicTacToeBoard
                onClick={(i) => this.handleClick(i)}
                squares={current.squares}
              />
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>
          <ul>{moves}</ul>
        </Container>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
