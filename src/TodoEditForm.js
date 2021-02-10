import React from 'react';
import useInputState from "./Hooks/useInputState";

function TodoEditForm({id, task, editTodo, toggleSow}) {
    const [inputTodo, handleInputTodo, restInputTodo] = useInputState(task)
    return (
        <form onSubmit={(evt)=>{
            evt.preventDefault();
            editTodo(id, inputTodo);
            restInputTodo();
            toggleSow();
        }}>
            <input onChange={handleInputTodo} value={inputTodo} autoFocus/>
        </form>
    )
}

export default TodoEditForm
