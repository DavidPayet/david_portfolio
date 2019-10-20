import React, { Component } from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import Snake from '../Snake';
import SnakeFood from '../SnakeFood';

import './SnakePage.scss';

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y]
}

const initialState = {
  food: getRandomCoordinates(),
  speed: 150,
  direction: 'RIGHT',
  snakeDots: [
    [0, 0],
    [2, 0]
  ]
}

class SnakePage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.onKeyDown = this.onKeyDown.bind(this);
    this.moveSnake = this.moveSnake.bind(this);
    this.checkIfOutOfBorders = this.checkIfOutOfBorders.bind(this);
    this.onGameOver = this.onGameOver.bind(this);
    this.checkIfCollapsed = this.checkIfCollapsed.bind(this);
    this.checkIfEat = this.checkIfEat.bind(this);
    this.enlargeSnake = this.enlargeSnake.bind(this);
    this.increaseSpeed = this.increaseSpeed.bind(this);
  }

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
  }

  onKeyDown = (e) => {
    e = e || window.event;

    switch (e.keyCode) {
      case 38:
        this.setState({ direction: 'UP' });
        break;
      case 40:
        this.setState({ direction: 'DOWN' });
        break;
      case 37:
        this.setState({ direction: 'LEFT' });
        break;
      case 39:
        this.setState({ direction: 'RIGHT' });
        break;
        default:
    }
  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
        default:
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots
    })
  }

  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.onGameOver();
      }
    })
  }

  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: getRandomCoordinates()
      })
      this.enlargeSnake();
      this.increaseSpeed();
    }
  }

  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
      snakeDots: newSnake
    })
  }

  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10
      })
    }
  }

  onGameOver() {
    alert(`Game Over. Snake length is ${this.state.snakeDots.length}`);
    this.setState(initialState)
  }

  render() {
    return (
      <div className="SnakePage">
        <Container className="snakePage">
          <Row>
            <NavLink className="home" href="/">
              <img className="dp-logo" src="/medias/dp-logo.png" alt="dp-logo" />
            </NavLink>
          </Row>

          <Row>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
              <h1>Snake</h1>
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>

          <Row>
            <Col xl="3" lg="3" md="3" sm="1" xs="1" />
            <Col className="game-area" lg="6" md="6" sm="10" xs="10">
                <Snake className="snake-dot" snakeDots={this.state.snakeDots} />
                <SnakeFood className="snake-food" dot={this.state.food} />
            </Col>
            <Col xl="3" lg="3" md="3" sm="1" xs="1" />
          </Row>

        </Container>
      </div>
    );
  }
}

export default SnakePage;