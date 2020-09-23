import React from "react";
import "./ToDoList.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        <div className="submittedInput">
          <button id="leftBtn" onClick={() => completeTodo(index)}>Complete</button>
          <div className="inputText">
            <p className="alignTextCenter">
            {todo.text}
            </p>
          </div>
          <button id="rightBtn" onClick={() => removeTodo(index)}>Delete</button>
        </div>
      </div>
    );
  }
  
export default Todo;