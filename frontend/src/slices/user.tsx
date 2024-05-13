import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
	isLogin: boolean;
}

const initialState: IInitialState = {
	isLogin: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setIsLogin: (state, action: PayloadAction<boolean>) => {
			state.isLogin = action.payload;
		},
	},
});

export const { setIsLogin } = userSlice.actions;

export default userSlice.reducer;
