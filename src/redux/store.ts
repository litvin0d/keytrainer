import { configureStore } from "@reduxjs/toolkit";

import quoteReducer from "./quoteSlice";
import counterReducer from "./counterSlice";
import startedReducer from "./startedSlice";
import failedReducer from "./failedSlice";
import timeoutReducer from "./timeoutSlice";

export const store = configureStore({
    reducer: {
        quote: quoteReducer,
        counter: counterReducer,
        started: startedReducer,
        failed: failedReducer,
        timeout: timeoutReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
