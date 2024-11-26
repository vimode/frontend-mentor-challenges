import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/login.js";
import todoService from "../services/todos.js";

const userSlice = createSlice({
	name: "user",
	initialState: [],
	reducers: {
		setUser(state, action) {
			if (action.payload.token)
				window.localStorage.setItem(
					"loggedTodoUser",
					JSON.stringify({
						username: action.payload.username,
						token: action.payload.token,
						id: action.payload.id,
					}),
				);
			return action.payload;
		},
	},
});

export const loginUser = (username, password) => {
	return async (dispatch) => {
		const user = await loginService.login({ username, password });
		todoService.setToken(user.token);
		dispatch(setUser(user));
	};
};

export const authUser = (user) => {
	return async (dispatch) => {
		dispatch(setUser(user));
		todoService.setToken(user.token);
	};
};

export const logoutUser = () => {
	return async (dispatch) => {
		todoService.setToken("");
		window.localStorage.clear();
		dispatch(setUser([]));
	};
};

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
