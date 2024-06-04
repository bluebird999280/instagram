import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { checkThunk, loginThunk, registerThunk } from "./thunk";

interface IInitialState {
	isLogin: boolean;
	loading: boolean;
	error?: string;
}

const initialState: IInitialState = {
	isLogin: false,
	loading: false,
	error: undefined,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		resetError: (state) => {
			state.error = undefined;
		},
		setIsLogin: (state, action: PayloadAction<boolean>) => {
			const accessToken = localStorage.getItem("accessToken");
			const refreshToken = localStorage.getItem("refreshToken");

			if (action.payload && accessToken && refreshToken)
				state.isLogin = true;
			if (!action.payload) {
				localStorage.removeItem("accessToken");
				localStorage.removeItem("refreshToken");
				state.isLogin = false;
			}
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(loginThunk.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(loginThunk.fulfilled, (state, action) => {
				state.loading = false;
				state.isLogin = true;

				localStorage.setItem("accessToken", action.payload.accessToken);
				localStorage.setItem(
					"refreshToken",
					action.payload.refreshToken
				);
			})
			.addCase(loginThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(registerThunk.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(registerThunk.fulfilled, (state, action) => {
				state.loading = false;
				state.isLogin = true;

				localStorage.setItem("accessToken", action.payload.accessToken);
				localStorage.setItem(
					"refreshToken",
					action.payload.refreshToken
				);
			})
			.addCase(registerThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(checkThunk.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(checkThunk.fulfilled, (state, action) => {
				state.loading = false;
				state.isLogin = true;

				localStorage.setItem("accessToken", action.payload.accessToken);
			})
			.addCase(checkThunk.rejected, (state, action) => {
				state.loading = false;
				state.isLogin = false;
				state.error = action.payload;

				localStorage.removeItem("accessToken");
				localStorage.removeItem("refreshToken");
			}),
});

export const { setIsLogin, resetError } = userSlice.actions;
export default userSlice.reducer;
