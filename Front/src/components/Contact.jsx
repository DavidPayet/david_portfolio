import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';


import './Contact.scss';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="Contact" id="contact-section">
        <Container className="contact">
          <h1>Me contacter</h1>
            <Row>
              <Col xl="3" lg="3" md="3" sm="1" xs="1" />
              <Col xl="6" lg="6" md="6" sm="10" xs="10">
              <img className="media" src="/medias/pont-de-pierre.jpg" alt="myphoto" />
              </Col>
              <Col xl="3" lg="3" md="3" sm="1" xs="1" />
            </Row>
            <br />
            <br />
            <Row>
              <Col xl="3" lg="3" md="3" sm="1" xs="1" />
              <Col xl="6" lg="6" md="6" sm="10" xs="10" >
                <p className="phrase">
                  Non.., je n'habite pas sous ce pont !..
                  <br />
                  <br />
                  En revanche vous pouvez m'écrire
                    <a className="email" href="mailto:davidpayet570@gmail.com"> ici</a>
                  <br />
                  <br />
                  Je serai heureux de vous lire et c'est avec plaisir que je vous répondrai.
                </p>

              </Col>
              <Col xl="3" lg="3" md="3" sm="1" xs="1" />
            </Row>
        </Container>
      </div>
    );
  }
}