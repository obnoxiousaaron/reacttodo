import React from "react"
import "./ToDoList.css";

function TodoForm({addTodo}){
    const [value, setValue] = React.useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if(!value) return
        addTodo(value)
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
              type ="text"
              className="input"
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder = "Type something ... " />
              <button id="topSubmitBtn" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default TodoForm