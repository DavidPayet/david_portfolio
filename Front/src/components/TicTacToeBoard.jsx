import React, { Component } from 'react';
import TicTacToeSquare from '../components/TicTacToeSquare';

export default class TicTacToeBoard extends Component {

  renderSquare(i) {
    return <TicTacToeSquare
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />
  }
  render() {
    return (
      <div>
        <span className="border-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </span>
        <span className="border-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </span>
        <span className="border-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </span>
      </div>
    );
  }
}
