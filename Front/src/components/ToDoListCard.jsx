import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  NavLink
} from 'reactstrap';

import './Card.scss';

const ToDoListCard = () => {
  return (
    <div className="Card">
      <NavLink href="/todolist">
        <Card className="card">
          <CardImg top width="100%" src="/medias/todolist-img.jpg" alt="todolist-img" />
          <CardBody>
            <CardTitle className="title" >To Do List</CardTitle>
          </CardBody>
        </Card>
      </NavLink>
    </div>
  );
};

export default ToDoListCard;