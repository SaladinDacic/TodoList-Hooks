import React, { useContext } from 'react';
import TodoList from './TodoList';
import useTodoState from './Hooks/useTodoState';
import { v4 as uuidv4 } from 'uuid';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

function TodoApp() {
	const contextTheme = useContext(ThemeContext);
	const contextLanguage = useContext(LanguageContext);
	const initialTodo = [ { id: uuidv4(), task: 'ja sam initial todo', complited: false } ];
	const [ todos, addTodo, toggleCompliteTodo, editTodo, deleteTodo ] = useTodoState(initialTodo);
	const { isDarkMode, toggleTheme } = contextTheme;
	const { language, changeLang } = contextLanguage;

	return (
		<div>
			<input
				onClick={() => {
					toggleTheme();
					changeLang();
				}}
				type="checkbox"
			/>
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
