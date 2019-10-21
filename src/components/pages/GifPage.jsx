import React, { Component } from 'react';
import { Container, Row, Col, NavLink, Button } from 'reactstrap';
import gifs from '../../gif.js';

import './GifPage.scss';

class GifPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.generateGif();
  };

  generateGif() {
    //On transforme les gifs en Array
    const keyArray = Object.keys(gifs);
    //Un gif au hasard
    const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
    //Pour ne pas avoir 2 gifs identiques d'affilé
    if (this.state.gif === gifs[randomKey].gif) {
      this.generateGif();
      return;
    }
    this.setState(gifs[randomKey]);
  };


  render() {
    return (
      <div className="GifPage">
        <Container className='gifPage'>
          <Row>
            <NavLink className="home" href="/">
              <img className="dp-logo" src="/medias/dp-logo.png" alt="dp-logo" />
            </NavLink>
          </Row>
          <Row>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
              <h1>Gifs Generator</h1>
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>
          <Row>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
              <p>{this.state.phrase}</p>
              <br />
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>
          <Row>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
              <img className="gifMedias" src={this.state.gif} alt="gif" />
              <br />
              <br />
              <Button className="btn-next" onClick={e => this.generateGif(e)}>Suivant</Button>
              <br />
              <br />
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>
        </Container>
      </div>
    )
  }
}

export default GifPage;