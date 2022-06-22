
export enum UsersActionEnums {
	FETCH_USERS = "FETCH_USERS",
	FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
	FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}

interface FetchUsersAction {
	type: UsersActionEnums.FETCH_USERS;
}

interface FetchUsersActionSuccess {
	type: UsersActionEnums.FETCH_USERS_SUCCESS;
	payload: any[]
}

interface FetchUsersActionError {
	type: UsersActionEnums.FETCH_USERS_ERROR;
	payload: string
}

export interface UserState {
	users: any[];
	loading: boolean;
	error: string | null
}

export type UserAction = FetchUsersAction | FetchUsersActionError | FetchUsersActionSuccess
