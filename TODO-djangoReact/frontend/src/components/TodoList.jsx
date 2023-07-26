import React from "react";
import ListGroup from "react-bootstrap/ListGroup"

const TodoList = () => {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item >Info</ListGroup.Item>
        <ListGroup.Item >Warning</ListGroup.Item>
        <ListGroup.Item >Danger</ListGroup.Item>
        <ListGroup.Item >Success</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default TodoList;
