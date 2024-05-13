import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./slices/userApi";
import view from "@/slices/view";

const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		view,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;
