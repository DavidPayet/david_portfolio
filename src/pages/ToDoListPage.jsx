import React, { useState } from 'react';
import { Container, Row, Col, Form, Input } from 'reactstrap';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdPlaylistAdd } from "react-icons/md";
import NavApp from '../components/NavApp';

import './ToDoListPage.scss';

const Todo = ({ todo, completeTodo, index, removeTodo }) => {
  return (
    <div className="list" style={{ textDecoration: todo.isComplete ? 'line-through' : '' }}>
      <Container>
        <Row>
          <Col className="checkCol" xl="2" lg="2" md="2" sm="2" xs="2">
            <Input
              type="checkbox"
              onClick={() => completeTodo(index)}
              className="check"
            />
          </Col>
          <Col className="todo-text" xl="8" lg="8" md="8" sm="8" xs="8">
            {todo.text}
          </Col>
          <Col xl="2" lg="2" md="2" sm="2" xs="2">
            <RiDeleteBin6Line className="deleteBtn" onClick={() => removeTodo(index)} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    // check for the value
    if (!value) return;
    addTodo(value)
    setValue('')
  }
  return (
    <Form className="form">
      <Input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)} />
      <MdPlaylistAdd className="addBtn" onClick={handleSubmit} />
    </Form>
  )
}

const ToDoListPage = () => {
  const [todos, setTodos] = useState([])

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)
  }

  // update function
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos)
  }

  return (
    <div className="ToDoListPage">
      <NavApp />
      <Container className='toDoListPage'>
        <Row>
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          <Col xl="8" lg="8" md="8" sm="10" xs="10">
            <h1>To Do List</h1>
            <TodoForm addTodo={addTodo} />
          </Col>
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
        </Row>
        <br />
        <Row>
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          <Col xl="8" lg="8" md="8" sm="10" xs="10">
            {todos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
          </Col>
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
        </Row>
      </Container>
    </div>
  )
}

export default ToDoListPage