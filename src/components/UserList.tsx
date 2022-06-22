import React, { useEffect } from 'react';
import { useTypesSelector } from "../hooks/useTypesSelector";
import { fetchUsers } from "../store/action-creators/user";
import { useActions } from "../hooks/useActions";
import '../index.css';

export const UserList: React.FC = () => {

	const {users, error, loading} = useTypesSelector(state => state.user)
	const {fetchUsers} = useActions()

	useEffect(() => {
		fetchUsers()
	},[])

	if (loading) {
		return <h1 className='loading'>Loading...</h1>
	}

	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div>
			<h2 className='title'>Users</h2>
			<ul className='list'>
				{users.map(user => (
					<li key={user.id} className='list_item'>{user.name}</li>
				))}
			</ul>
		</div>

	);
};
