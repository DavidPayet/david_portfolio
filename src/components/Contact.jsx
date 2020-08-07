import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BsGeo } from "react-icons/bs";
import { FiMail, FiPhone, FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import Button from '@material-ui/core/Button';

import '../styles/Contact.scss'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactform", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });


  render() {
    const { name, email, message } = this.state;
    return (
      <div className="Contact" id="contact-section">
        <Container className="contact">
          <h1>Me contacter</h1>
          <Row>
            <Col xl="6" lg="6" md="6" sm="12" xs="12" >
              <form
                onSubmit={this.handleSubmit}
                name="contactform"
                method="post"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input
                  type="hidden"
                  name="bot-field"
                  value="contactform"
                />
                <div className="fields">
                  <div className="field">
                    <label>Nom</label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <label>Message</label>
                    <textarea
                      name="message"
                      value={message}
                      rows="4"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <Button variant="outlined" type="submit">Envoyer</Button>
              </form>
            </Col>
            <Col className="info" xl="6" lg="6" md="6" sm="12" xs="12" >
              <ul>
                <Row>
                  <li>
                    <BsGeo className="icons" />33000, Bordeaux
                </li>
                </Row>
                <Row>
                  <li>
                    <a href="mailto:davidpayet570@gmail.com">
                      <FiMail className="icons" />davidpayet570@gmail.com
                    </a>
                  </li>
                </Row>
                <Row>
                  <li>
                    <FiPhone className="icons" />+33 6 20 38 42 33
                </li>
                </Row>
                <Row>
                  <li>
                    <a href="https://www.linkedin.com/in/david-payet/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="icons" />www.linkedin.com/in/david-payet
                    </a>
                  </li>
                </Row>
                <Row>
                  <li>
                    <a href="https://github.com/DavidPayet" target="_blank" rel="noopener noreferrer">
                      <FiGithub className="icons" />https://github.com/DavidPayet
                    </a>
                  </li>
                </Row>
              </ul>
            </Col>
          </Row>
          <Row className="footer">
            <ul >
              <li>©Copyright 2020 - All right reserved</li>
              <li>Davi<img className="dp-logo" src="/medias/dp-logo2.png" alt="dp-logo" />ayet</li>
            </ul>
          </Row>
        </Container>
      </div>
    )
  }
}