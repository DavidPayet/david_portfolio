import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  NavLink
} from 'reactstrap';

import './Card.scss';

const TimerCard = () => {
  return (
    <div className="Card">
      <NavLink href="/timers" >
      <Card className="card">
        <CardImg top width="100%" src="/medias/timer.png" alt="timer-img" />
        <CardBody>
          <CardTitle className="title" >Timers</CardTitle>
        </CardBody>
      </Card>
      </NavLink>
    </div>
  );
};

export default TimerCard;