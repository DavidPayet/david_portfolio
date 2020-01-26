import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  NavLink
} from 'reactstrap';

import './Card.scss';

const ChessPlayersCard = () => {
  return (
    <div className="Card">
      <NavLink href="/chessplayers">
        <Card className="card">
          <CardImg top width="100%" src="/medias/chessPlayers-img.png" alt="chessPlayers-img" />
          <CardBody>
            <CardTitle className="title" >Chess Players</CardTitle>
          </CardBody>
        </Card>
      </NavLink>
    </div>
  );
};

export default ChessPlayersCard;