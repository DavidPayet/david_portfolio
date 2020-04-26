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

const longText = `Voici un poste de télécommunication révolutionnaire nommé 2PY1F ! Connectez vous et Essayez le en y laissant un message ! Vous avez aussi la possibilité de suppimer votre message ainsi que d'aimer un message existant. Cette aplication codée en react utilise firebase pour l'authentification et la base de données.`;

const Dpy1fCard = () => {
  return (
    <div className="Card">
      <Tooltip arrow title={longText} TransitionProps={{ timeout: 600 }}>
        <NavLink href="https://2py1f.netlify.com">
          <Card className="card">
            <CardImg top width="100%" src="/medias/dpy1f2.png" alt="2py1f-img" />
            <CardBody>
              <CardTitle className="title" >2PY1F</CardTitle>

            </CardBody>
          </Card>
        </NavLink>
      </Tooltip>
    </div>
  );
};

export default Dpy1fCard;