import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { MdLocationCity } from "react-icons/md";
import { FiMail } from "react-icons/fi";

import '../styles/Contact.scss'

const Contact = () => {
  return (
    <div className="Contact" id="contact-section">
      <Container className="contact">
        <h1>Me contacter</h1>
        <Row>
          <Col xl="6" lg="6" md="6" sm="12" xs="12" >
            <form action="POST" data-netlify="true">
              <div className="fields">
                <div className="field">
                  <label>Nom</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="field">
                  <label>Message</label>
                  <textarea name="message" id="message" rows="4" />
                </div>
                <div className="field">
                  <div data-netlify-recaptcha="true" />
                </div>
              </div>
              <Button type="submit">Envoyer</Button>
            </form>
          </Col>
          <Col className="info" xl="6" lg="6" md="6" sm="12" xs="12" >
            <ul>
              <Row>
              <li>
                <MdLocationCity className="icons" />Bordeaux
                </li>
                </Row>
                <Row>
              <li>
                <a href="mailto:davidpayet570@gmail.com">
                  <FiMail className="icons" />davidpayet570@gmail.com
                </a>
              </li>
              </Row>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact