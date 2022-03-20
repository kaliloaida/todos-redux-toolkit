import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../store/todoSlice";
import "./Addtodo.css";

const Addtodo = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    event.preventDefault()
		if (text.trim().length > 0) {
			dispatch(addNewTodo(text))
		}
		setText('')
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        className="task-input"
        placeholder="Add task"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></input>

      <button className="task-button" onClick={onSubmitHandler}>
        Save
      </button>
    </div>
  );
};

export default Addtodo;

/* 
const Addtodo = ({ value, updateText, handleAction }) => {
    return (
      <label>
        <input
          placeholer='new todo'
          value={value}
          onChange={(e) => updateText(e.target.value)}
        />
        <button onClick={handleAction}>Add todo</button>
      </label>
    );
  };
  
  export default Addtodo; */
