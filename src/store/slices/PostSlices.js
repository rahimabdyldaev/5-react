import { createSlice } from "@reduxjs/toolkit";
import fetchAllPosts from "../thunk/PostThunk";

const initialState = {
    posts: [],
    isLoading: false,
    isError: '',
};

const postsSlice = createSlice({
    initialState,
    name: 'posts',
    reducers: {
        setPosts: (state, action) => {
            console.log(action.payload);
            state.isError = '';
            state.isLoading = false;
            state.posts = action.payload;
        },
        setLoading: (state, action) => {
            state.isError = '';
            state.isLoading = true;
            state.posts = [];
        },
        setError: (state, action) => {
            state.isError = 'Something has gone wrong';
            state.isLoading = false;
            state.posts = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllPosts.pending, (state, action) => {
            state.isError = '';
            state.isLoading = true;
            state.posts = [];
        });
        builder.addCase(fetchAllPosts.rejected, (state, action) => {
            state.isError = 'Something has gone wrong';
            state.isLoading = false;
            state.posts = [];
        });
        builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
            state.isError = '';
            state.isLoading = false;
            state.posts = action.payload;
        });

},
});

const postsReducer = postsSlice.reducer;

export const { setError, setLoading, setPosts } = postsSlice.actions;

export default postsReducer;