import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  NavLink
} from 'reactstrap';
import Tooltip from '@material-ui/core/Tooltip';

import './Card.scss';

const longText = `Timers regroupe 1 compteur, 1 chronomètre et 1 pomodoro.`;

const TimerCard = () => {
  return (
    <div className="Card">
      <Tooltip arrow title={longText} TransitionProps={{ timeout: 600 }}>
        <NavLink href="/timers" >
          <Card className="card">
            <CardImg top width="100%" src="/medias/timer.jpg" alt="timer-img" />
            <CardBody>
              <CardTitle className="title" >Timers</CardTitle>
            </CardBody>
          </Card>
        </NavLink>
      </Tooltip>
    </div>
  );
};

export default TimerCard;