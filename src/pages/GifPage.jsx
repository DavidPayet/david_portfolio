import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import gifs from '../gif.js';
import NavApp from '../components/NavApp';

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
        <NavApp />
        <Container className='gifPage'>
          <h1>Gifs Generator</h1>
          <p>{this.state.phrase}</p>
          <Row>
            <Col xl="2" lg="2" md="2" />
            <Col xl="8" lg="8" md="8" sm="12" xs="12">
              <img className="gifMedias" src={this.state.gif} alt="gif" />
              <br />
              <Button className="btn-next" onClick={e => this.generateGif(e)}>Suivant</Button>
            </Col>
            <Col xl="2" lg="2" md="2" />
          </Row>
        </Container>
      </div>
    )
  }
}

export default GifPage;