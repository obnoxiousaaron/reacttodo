import React from "react";
import "./ToDoList.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        <div className="submittedInput">
          <button onClick={() => completeTodo(index)}>Complete</button>
          <div className="inputText">{todo.text}</div>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    );
  }
  
export default Todo;