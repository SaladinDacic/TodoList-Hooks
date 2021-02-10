import React from 'react';
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList({todos, addTodo, toggleCompliteTodo, editTodo, deleteTodo}) {
    let newTodos = todos
    // console.log(todos)
    return (
        <div>
            <TodoForm addTodo={addTodo}/>
            {newTodos.map((val, i)=>{
                return  <Todo deleteTodo={deleteTodo} editTodo={editTodo} toggleCompliteTodo={toggleCompliteTodo} key={i} {...val}/>
            })}
        </div>
    )
}

export default TodoList
