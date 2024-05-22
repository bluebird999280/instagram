import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getFeedListThunk, uploadFeedThunk } from "./thunk";
import { IFeedData } from "@/utils/types/view";

interface IInitialState {
	loading: boolean;
	error?: string;
	feedList: IFeedData[];
	modal: string | null;
	slideMenu: string;
	detailMenu: boolean;
}

const initialState: IInitialState = {
	loading: false,
	error: undefined,
	feedList: [],
	modal: null,
	slideMenu: "",
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
	extraReducers: (builder) =>
		builder
			.addCase(getFeedListThunk.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(getFeedListThunk.fulfilled, (state, action) => {
				state.loading = false;

				for (let i = 0; i < action.payload.feeds.length; i++) {
					if (
						state.feedList.length !== 0 &&
						state.feedList[
							state.feedList.length -
								action.payload.feeds.length +
								i
						]._id === action.payload.feeds[i]._id
					)
						return;
				}

				state.feedList.push(...action.payload.feeds);
			})
			.addCase(getFeedListThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(uploadFeedThunk.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(uploadFeedThunk.fulfilled, (state) => {
				state.loading = false;
			})
			.addCase(uploadFeedThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			}),
});

export const { setModal, setSlideMenu, toggleDetailMenu } = userSlice.actions;

export default userSlice.reducer;
