import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  NavLink
} from 'reactstrap';

import './Card.scss';

const GifCard = () => {
  return (
    <div className="Card">
      <NavLink href="/gif-generator">
        <Card className="card">
          <CardImg top width="100%" src="https://media1.giphy.com/media/KCdXOVBvvEqeWzFNf8/200w.gif?cid=790b76114a53ed5fea7ec9cabe7b3e3ddeb28455c39bea14&rid=200w.gif" alt="gif-img" />
          <CardBody>
            <CardTitle className="title" >Gif Generator</CardTitle>
          </CardBody>
        </Card>
      </NavLink>
    </div>
  );
};

export default GifCard;