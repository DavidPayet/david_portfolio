import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  NavLink
} from 'reactstrap';
import Tooltip from '@material-ui/core/Tooltip';

import '../styles/Card.scss';

const longText = `Voici une vidéo de démonstration de Chess Player Data. Cette application recupère des données sur des joueurs d'échecs avec la possibilité d'aujout et de suppression grâce à des requêtes SQL. Utilisation de NodeJS pour le backend.`;

const ChessPlayersCard = () => {
  return (
    <div className="Card">
      <Tooltip arrow title={longText} TransitionProps={{ timeout: 600 }}>
        <NavLink href="/chessplayers">
          <Card className="card">
            <CardImg top width="100%" src="/medias/chessPlayers-img.png" alt="chessPlayers-img" />
            <CardBody>
              <CardTitle className="title" >Chess Players</CardTitle>
            </CardBody>
          </Card>
        </NavLink>
      </Tooltip>
    </div >
  );
};

export default ChessPlayersCard;