import { UserState, UsersActionEnums, UserAction } from "../../types/users";


const initialState: UserState = {
	users: [],
	loading: false,
	error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
	switch (action.type) {
		case UsersActionEnums.FETCH_USERS:
			return {
				loading: true,
				users: [],
				error: null
			}
		case UsersActionEnums.FETCH_USERS_SUCCESS:
			return {
				loading: false,
				users: action.payload,
				error: null
			}

		case UsersActionEnums.FETCH_USERS_ERROR:
			return {
				loading: false,
				users: [],
				error: action.payload
			}
		default:
			return state

	}
}
