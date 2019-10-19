import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  NavLink
} from 'reactstrap';

import './Card.scss';

const TicTacToeCard = () => {
  return (
    <div className="Card">
      <NavLink href="/tictactoe">
        <Card className="card">
          <CardImg top width="100%" src="/medias/tictactoe-img.png" alt="ticTacToe-img" />
          <CardBody>
            <CardTitle className="title" >Tic Tac Toe</CardTitle>

          </CardBody>
        </Card>
      </NavLink>
    </div>
  );
};

export default TicTacToeCard;