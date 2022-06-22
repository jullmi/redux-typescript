export interface TodoState {
	todos: any[];
	loading: boolean;
	error: null | string;
	page: number;
	limit: number
}

export enum TodoActionEnums {
	FETCH_TODOS= "FETCH_TODOS",
	FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
	FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
	SET_TODO_PAGE = "SET_TODO_PAGE"
}

interface FetchTodoAction {
	type: TodoActionEnums.FETCH_TODOS
}

interface FetchTodoActionError {
	type: TodoActionEnums.FETCH_TODOS_ERROR;
	payload: string
}

interface FetchTodoActionSuccess {
	type: TodoActionEnums.FETCH_TODOS_SUCCESS;
	payload: any[]
}

interface GetTodoPage {
	type: TodoActionEnums.SET_TODO_PAGE;
	payload: number
}

export type TodoAction = FetchTodoAction | FetchTodoActionError | FetchTodoActionSuccess | GetTodoPage
