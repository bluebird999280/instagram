import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user/user";

const store = configureStore({
	reducer: { user },

	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;
