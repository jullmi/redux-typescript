import { Dispatch } from "redux";
import { TodoAction, TodoActionEnums } from "../../types/todo";
import axios from "axios";

export const fetchTodos = (page: number = 1, limit:number = 10) => {
	return async (dispatch: Dispatch<TodoAction>) => {
		try {
			dispatch({type: TodoActionEnums.FETCH_TODOS})
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
				params: {
					_page: page,
					_limit: limit
				}
			})
			dispatch({type: TodoActionEnums.FETCH_TODOS_SUCCESS, payload: response.data})
		} catch (e) {
			dispatch({
				type: TodoActionEnums.FETCH_TODOS_ERROR,
				payload: "Произошла ошибка при загрузке списка дел"
			})
		}
	}
}

export const setTodoPage = (page: number): TodoAction => {
	return {
		type: TodoActionEnums.SET_TODO_PAGE,
		payload: page
	}
}