import { UserAction, UsersActionEnums } from "../../types/users";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchUsers = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({type: UsersActionEnums.FETCH_USERS})
			const response = await axios.get('https://jsonplaceholder.typicode.com/users')
			dispatch({type: UsersActionEnums.FETCH_USERS_SUCCESS, payload: response.data})
		} catch (e) {
			dispatch({
				type: UsersActionEnums.FETCH_USERS_ERROR,
				payload: "Произошла ошибка при загрузке пользователей"
			})
		}
	}
}