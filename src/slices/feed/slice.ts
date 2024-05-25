import { createSlice } from "@reduxjs/toolkit";
import { getFeedListThunk, uploadFeedThunk, getFeedThunk } from "./thunk";
import { IFeedData } from "@/utils/types/feed";

interface IInitialState {
	loading: boolean;
	error?: string;
	feed?: IFeedData;
	feedList: IFeedData[];
}

const initialState: IInitialState = {
	loading: false,
	error: undefined,
	feed: undefined,
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
			})
			.addCase(getFeedThunk.pending, (state) => {
				state.loading = true;
				state.error = undefined;
				state.feed = undefined;
			})
			.addCase(getFeedThunk.fulfilled, (state, action) => {
				state.loading = false;
				state.feed = action.payload.feed;
			})
			.addCase(getFeedThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			}),
});

export default feedSlice.reducer;
