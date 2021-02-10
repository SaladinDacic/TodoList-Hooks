import useSetLocalStorage from "./useSetLocalStorage";
import { v4 as uuidv4 } from 'uuid';

function useTodoState(initialTodo) {
 
	const [ todos, setTodos ] = useSetLocalStorage("todos", initialTodo);
    const addTodo = (task) => {
		setTodos([ { id: uuidv4(), task, complited: false }, ...todos ]);
	};

	const toggleCompliteTodo = (todoId) => {
		setTodos(
			todos.map((val) => {
				return val.id === todoId ? { ...val, complited: !val.complited } : val;
			})
		);
	};
	const editTodo = (todoId, task) => {
		setTodos(
			todos.map((val) => {
				return val.id === todoId ? { ...val, task: task } : val;
			})
		);
	};
	const deleteTodo = (todoId) => {
		setTodos(
			[ ...todos ].filter((val) => {
				return val.id !== todoId;
			})
		);
    };
    return [todos, addTodo, toggleCompliteTodo, editTodo, deleteTodo]
}

export default useTodoState
