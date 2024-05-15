import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./slices/userApi";
import { feedApi } from "./slices/feedApi";
import user from "@/slices/user";
import view from "@/slices/view";

const store = configureStore({
	reducer: {
		view,
		user,
		[authApi.reducerPath]: authApi.reducer,
		[feedApi.reducerPath]: feedApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(authApi.middleware)
			.concat(feedApi.middleware),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;
