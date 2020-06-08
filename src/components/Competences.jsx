import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FiDownload } from 'react-icons/fi';

import '../styles/Competences.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Competences = () => {
  const classes = useStyles();
  return (
    <div className="Competences" id="competences-section">
      <Container className="competences">
        <h1>Compétences</h1>
        <Row>
          <Col className="tools" xl="10" lg="10" md="10" sm="8" xs="8">
            <img className="logos" src="/medias/logos/logo-html.png" alt="logo-html" />
            <img className="logos" src="/medias/logos/logo-css.png" alt="logo-css" />
            <img className="logos" src="/medias/logos/logo-js.png" alt="logo-js" />
            <img className="logos" src="/medias/logos/logo-react.png" alt="logo-react" />
            <img className="logos" src="/medias/logos/logo-reactstrap.png" alt="logo-reactstrap" />
            <img className="logos" src="/medias/logos/logo-sass.png" alt="logo-sass" />
            <img className="logos" src="/medias/logos/logo-nodejs.png" alt="logo-nodejs" />
            <img className="logos" src="/medias/logos/logo-express.png" alt="logo-express" />
            <img className="logos" src="/medias/logos/logo-mysql.png" alt="logo-mysql" />
            <img className="logos" src="/medias/logos/logo-sql.png" alt="logo-sql" />
          </Col>
        </Row>
        <Row>
          <Col xl="1" lg="1" md="1" sm="2" xs="2" />
          <Col className={classes.root} xl="10" lg="10" md="10" sm="8" xs="8">
            <Button variant="outlined" href="/cv">
              <FiDownload style={{ fontSize: "20px", marginRight: "10px" }} /> Télécharger mon CV
              </Button>
          </Col>
          <Col xl="1" lg="1" md="1" sm="2" xs="2" />
        </Row>
      </Container>
    </div>
  );
}

export default Competences;