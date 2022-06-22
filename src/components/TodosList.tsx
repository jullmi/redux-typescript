import React, { useEffect } from 'react';
import { useTypesSelector } from "../hooks/useTypesSelector";
import { useActions } from "../hooks/useActions";
import '../index.css';

export const TodosList = () => {
	const {todos, error, loading, page, limit} = useTypesSelector(state => state.todo)
	const {fetchTodos, setTodoPage} = useActions()
	const pages = [1, 2, 3, 4, 5]

	useEffect(() => {
		fetchTodos(page, limit)
	}, [page])

	if (loading) {
		return <h1 className="loading">Loading...</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div>
			<h2 className='title'>Todos</h2>
			<ul className='list'>
				{todos.map(todo => (
					<li key={todo.id} className='list_item'>{todo.id} - {todo.title}</li>
				))}
			</ul>
			<ul className='list_pages'>
				{pages.map(p => (
					<li
						key={p}
						className='page'
						style={{border: p === page? '2px solid green' : '1px solid black'}}
						onClick={() => setTodoPage(p)}
					>
						{p}
					</li>
				))}
			</ul>
		</div>

	);
};

