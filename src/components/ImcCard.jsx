import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  NavLink
} from 'reactstrap';

import './Card.scss';

const ImcCard = () => {
  return (
    <div className="Card">
        <NavLink href="/imc">
          <Card className="card">
            <CardImg top width="100%" src="/medias/imc.png" alt="imc-img" />
            <CardBody>
              <CardTitle className="title" >IMC App</CardTitle>

            </CardBody>
          </Card>
        </NavLink>
    </div>
  );
};

export default ImcCard;