import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./thunk";

interface IInitialState {
	loginLoading: boolean;
	isLogin: boolean;
	error?: string;
}

const initialState: IInitialState = {
	loginLoading: false,
	isLogin: false,
	error: undefined,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(loginThunk.pending, (state) => {
				state.loginLoading = true;
				state.error = undefined;
			})
			.addCase(loginThunk.fulfilled, (state, action) => {
				state.loginLoading = false;
				state.isLogin = true;

				localStorage.setItem("accessToken", action.payload.accessToken);
				localStorage.setItem(
					"refreshToken",
					action.payload.refreshToken
				);
			})
			.addCase(loginThunk.rejected, (state, action) => {
				state.loginLoading = false;
				state.isLogin = false;
				state.error = action.payload;
			}),
});

// export const {} = userSlice.actions;
export default userSlice.reducer;
