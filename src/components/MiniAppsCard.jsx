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

const longText = `Regroupement des mes premières applications en ReactJS`;

const MiniAppsCard = () => {
  return (
    <div className="Card">
      <Tooltip arrow title={longText} TransitionProps={{ timeout: 600 }}>
        <NavLink href="/miniapps">
          <Card className="card">
            <CardImg top width="100%" src="/medias/miniapps.jpeg" alt="miniapps-img" />
            <CardBody>
              <CardTitle className="title" >First Apps</CardTitle>
            </CardBody>
          </Card>
        </NavLink>
      </Tooltip>
    </div>
  );
};

export default MiniAppsCard;