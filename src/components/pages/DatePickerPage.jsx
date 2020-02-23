import React, { Component } from 'react';
import { Container, Row, Col, NavbarBrand, Button } from 'reactstrap';
import Calendar from 'react-calendar';

import './DatePickerPage.scss';

class DatePickerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      showDate: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = date => {
    this.setState({
      date
    })
  };

  handleClick = () => {
    this.setState({
      showDate: true
    })
  };

  reset = () => {
    this.setState({
      showDate: false
    })
  };

  render() {
    return (
      <div className="DatePickerPage">
        <Container className='datePickerPage'>
          <Row>
            <NavbarBrand className="home" href="/">
              <img className="dp-logo" src="/medias/dp-logo.png" alt="dp-logo" />
            </NavbarBrand>
          </Row>
          <Row>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
              <h1>Date Picker</h1>
              <div onClick={this.reset} >
              <Calendar
                className="calendar"
                onChange={this.handleChange}
                selectRange={true}
                value={this.state.date}
              />
              </div>
              <br />
              {this.state.showDate ? (
                <div>
                  <p>From : {this.state.date[0].toLocaleDateString()} To : {this.state.date[1].toLocaleDateString()}</p>
                </div>
              ) : null
              }
              <Button className="btn-val" onClick={this.handleClick}>Validation</Button>
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default DatePickerPage;