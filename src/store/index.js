import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/PostSlices";

const rootReducer = {
    posts: postsReducer,
};

const setupStore = () => configureStore({reducer: rootReducer});

export default setupStore;