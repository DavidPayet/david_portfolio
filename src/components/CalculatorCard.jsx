import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  NavLink
} from 'reactstrap';

import './Card.scss';

const CalculatorCard = () => {
  return (
    <div className="Card">
      <NavLink href="/calculator">
        <Card className="card">
          <CardImg top width="100%" src="/medias/calculator.jpg" alt="calculator-img" />
          <CardBody>
            <CardTitle className="title" >Calculator</CardTitle>
          </CardBody>
        </Card>
      </NavLink>
    </div>
  );
};

export default CalculatorCard;