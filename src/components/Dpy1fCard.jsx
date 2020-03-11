import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  NavLink
} from 'reactstrap';

import './Card.scss';

const Dpy1fCard = () => {
  return (
    <div className="Card">
      <NavLink href="https://2py1f.netlify.com">
      <Card className="card">
        <CardImg top width="100%" src="/medias/dpy1f.png" alt="2py1f-img" />
        <CardBody>
          <CardTitle className="title" >2PY1F</CardTitle>

        </CardBody>
      </Card>
      </NavLink>
    </div>
  );
};

export default Dpy1fCard;