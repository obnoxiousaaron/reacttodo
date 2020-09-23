import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/ToDoForm";
import ReactPlayer from 'react-player'


function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Imagine a world...",
      isCompleted: false
    },
    {
      text: "Without To-Do lists",
      isCompleted: false
    },
    {
      text: "Tragic, isn't?",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <ReactPlayer width="100vw" height="100vh" className="video" playing={true} autoplay={true} loop="" muted="" url="https://youtu.be/qsdzdUYl5c0" />
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}


export default App;