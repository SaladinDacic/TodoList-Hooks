import React from 'react';
import useInputState from "./Hooks/useInputState";

function TodoForm({addTodo}) {
    const [inputTodo, handleInputTodo, restInputTodo] = useInputState("")
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            restInputTodo();
            addTodo(inputTodo);
        }}>
            <label htmlFor="input">Enter new Todo</label>
            <input id="input" onChange={handleInputTodo} value={inputTodo}/>
            <h1>{inputTodo}</h1>
        </form>
    )
}

export default TodoForm
