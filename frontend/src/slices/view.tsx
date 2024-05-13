import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
	modal: string | null;
	slideMenu: string | null;
	detailMenu: boolean;
}

const initialState: IInitialState = {
	modal: null,
	slideMenu: null,
	detailMenu: false,
};

const userSlice = createSlice({
	name: "view",
	initialState,
	reducers: {
		setModal: (state, action: PayloadAction<typeof initialState.modal>) => {
			state.modal = action.payload;
		},
		setSlideMenu: (
			state,
			action: PayloadAction<typeof initialState.slideMenu>
		) => {
			state.slideMenu = action.payload;
		},
		toggleDetailMenu: (state) => {
			state.detailMenu = !state.detailMenu;
		},
	},
});

export const { setModal, setSlideMenu, toggleDetailMenu } = userSlice.actions;

export default userSlice.reducer;
