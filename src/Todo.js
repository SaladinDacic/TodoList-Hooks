import React from 'react';
import TodoEditForm from "./TodoEditForm";
import useToogleState from "./Hooks/useToogleState";

function Todo({id, task, complited, toggleCompliteTodo, editTodo, deleteTodo}) {
    const [show, toggleSow] = useToogleState(false)
    return (
        <div style={{display: "flex", alignItems:"center"}}>
            {   show
                ? <TodoEditForm editTodo={editTodo} task={task} id = {id} toggleSow={toggleSow} />
                :<h1 style={{textDecoration:`${complited? "line-through": "none"} `}} onClick={()=>{toggleCompliteTodo(id)}}>{task}</h1>
            }
            
            <button onClick={toggleSow}>Edit</button>
            <button onClick={()=>deleteTodo(id)}>Delete</button>
        </div>
    )
}

export default Todo
