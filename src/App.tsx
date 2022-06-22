import React from 'react';
import { UserList } from "./components/UserList";
import { TodosList } from "./components/TodosList";
import './index.css';

function App() {
	return (
		<div className='container'>
			<UserList/>
			<TodosList/>
		</div>
	);
}

export default App;
