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

const longText = `CVD Live Stats vous permet dans un premier temps d'avoir une vue globale sur l'épidémie CVD-19 grâce à un donut (chart.js) et de faire une recherche  par pays pour en connaître ses statistiques. Ensuite, vous avez la possibilité de consulter ces données sur une carte réalisée avec Mapbox Gl.`;

const Dpy1fCard = () => {
  return (
    <div className="Card">
      <Tooltip arrow title={longText} TransitionProps={{ timeout: 600 }}>
        <NavLink
          href="https://cvd-live-stats.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="card">
            <CardImg top width="100%" src="/medias/cvd.png" alt="Cvd-img" />
            <CardBody>
              <CardTitle className="title" >CVD Live Stats</CardTitle>
            </CardBody>
          </Card>
        </NavLink>
      </Tooltip>
    </div>
  );
};

export default Dpy1fCard;