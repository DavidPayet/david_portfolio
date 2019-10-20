import React, { Component } from 'react';
import { Container, Row, Col, NavbarBrand, Form, Button } from 'reactstrap';

import './ToDoListPage.scss';

class ToDoListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      items: []
    };
    this.onChange = this.onChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  onChange(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  addTodo(e) {
    e.preventDefault();
    this.setState({
      userInput: '',
      items: [...this.state.items, this.state.userInput]
    })
  }

  deleteTodo(item) {
    const array = this.state.items;
    const index = array.indexOf(item);
    array.splice(index, 1);
    this.setState({
      items: array
    })
  }

  renderTodos() {
    return this.state.items.map((item) => {
      return (
        <div key={item} className="list">
          <Row className="todo">
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
            {item} <button
              className="btn-delete"
              onClick={this.deleteTodo.bind(this, item)}>
              &#128465;
                  </button>
                  </Col>
                  <Col lxl="2" g="2" md="2" sm="1" xs="1" />
          </Row>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ToDoListPage">
        <Container className='toDoListPage'>
          <Row>
            <NavbarBrand className="home" href="/">
              <img className="dp-logo" src="/medias/dp-logo.png" alt="dp-logo" />
            </NavbarBrand>
          </Row>
          <Row>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
              <h1>To Do List</h1>
              <Form>
                <input
                  value={this.state.userInput}
                  type="text"
                  placeholder=" Ajouter une tâche"
                  onChange={this.onChange}
                />
                <br />
                <br />
                <br />
                <Button className="btn-add" onClick={this.addTodo}>Ajouter</Button>
              </Form>
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>
          <br />
          <br />
          <br />
          <br />
          <Row>
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
            <Col xl="8" lg="8" md="8" sm="10" xs="10">
            <span>
              {this.renderTodos()}
            </span>
            </Col>
            <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default ToDoListPage;