import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  NavLink
} from 'reactstrap';

import './Card.scss';

const DatePickerCard = () => {
  return (
    <div className="Card">
      <NavLink href="/datepicker">
      <Card className="card">
        <CardImg top width="100%" src="/medias/datepicker.png" alt="datepicker-img" />
        <CardBody>
          <CardTitle className="title" >Date Picker</CardTitle>

        </CardBody>
      </Card>
      </NavLink>
    </div>
  );
};

export default DatePickerCard;