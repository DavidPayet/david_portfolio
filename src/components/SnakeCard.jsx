import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  NavLink
} from 'reactstrap';

import './Card.scss';

const SnakeCard = () => {
  return (
    <div className="Card">
      <NavLink href="/snake">
        <Card className="card">
          <CardImg top width="100%" src="/medias/snake-logo.jpg" alt="snake-img" />
          <CardBody>
            <CardTitle className="title" >Snake</CardTitle>
          </CardBody>
        </Card>
      </NavLink>
    </div>
  );
};

export default SnakeCard;