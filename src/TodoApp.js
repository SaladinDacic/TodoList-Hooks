import React from 'react';
import TodoList from './TodoList';
import useTodoState from "./Hooks/useTodoState";
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
	const initialTodo = [
		{ id: uuidv4(), task: 'ja sam initial todo', complited: false }
    ];
    const [todos, addTodo, toggleCompliteTodo, editTodo, deleteTodo] = useTodoState(initialTodo)
  
	return (
		<div>
			<TodoList
				deleteTodo={deleteTodo}
				editTodo={editTodo}
				toggleCompliteTodo={toggleCompliteTodo}
				addTodo={addTodo}
				todos={todos}
			/>
		</div>
	);
}

export default TodoApp;
