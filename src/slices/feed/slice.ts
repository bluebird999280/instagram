import { createSlice } from "@reduxjs/toolkit";
import { getFeedListThunk, uploadFeedThunk } from "./thunk";
import { IFeedData } from "@/utils/types/view";

interface IInitialState {
	loading: boolean;
	error?: string;
	feedList: IFeedData[];
}

const initialState: IInitialState = {
	loading: false,
	error: undefined,
	feedList: [],
};

const feedSlice = createSlice({
	name: "view",
	initialState,
	reducers: {},
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

// export const {  } = feedSlice.actions;

export default feedSlice.reducer;