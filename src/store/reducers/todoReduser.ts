import { TodoAction, TodoActionEnums, TodoState } from "../../types/todo";

const initialState:TodoState = {
	todos: [],
	page: 1,
	loading: false,
	error: null,
	limit: 10
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
	switch (action.type) {
		case TodoActionEnums.FETCH_TODOS:
			return {...state, loading: true}
		case TodoActionEnums.FETCH_TODOS_ERROR:
			return {...state, loading: false, error: action.payload}
		case TodoActionEnums.FETCH_TODOS_SUCCESS:
			return {...state, loading: false, todos: action.payload}
		case TodoActionEnums.SET_TODO_PAGE:
			return {...state, page: action.payload}
		default:
			return state
	}
}