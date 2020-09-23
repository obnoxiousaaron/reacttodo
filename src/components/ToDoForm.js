import React from "react"
import "./ToDoList.css";

function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if (!value) return
        addTodo(value)
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="inputParentParent">
                <div className="inputParent">
                    <input 
                        className="input"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Type something ... "/>                         
                        <span class="bottom"></span>
                        <span class="right"></span>
                        <span class="top"></span>
                        <span class="left"></span>
                </div>
                <button id="topSubmitBtn" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default TodoForm