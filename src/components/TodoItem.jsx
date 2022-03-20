import React from "react";
import { useDispatch } from "react-redux";
import { toggleStatus, deleteTodo } from "../store/todoSlice";
import "./TodoItem.css";
import Card from "../UI/Card";
const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const removeTaskHandler = () => {
    dispatch(deleteTodo(id));
  };
  const checkedHandler = () => {
    dispatch(toggleStatus(id));
  };

  return (
    <Card className="container">
      <div  className="task-item">
        <input type="checkbox" onChange={checkedHandler} checked={completed} />
        <li className={`${completed ? "completed" : ""}`} >{title}</li>
      
      <button className="remove-task-button" onClick={removeTaskHandler}>
        Delete
      </button>
      </div>
    </Card>
  );
};

export default TodoItem;
