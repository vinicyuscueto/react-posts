import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import linkFetch from '../axios/config';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await linkFetch.get('/posts', { params: { _limit: 5 } });
    return response.data;
});

export const fetchPostById = createAsyncThunk('posts/fetchPostById', async (postId) => {
    const response = await linkFetch.get(`/posts/${postId}`);
    return response.data;
});

export const createPost = createAsyncThunk('posts/createPost', async (newPost) => {
    const response = await linkFetch.post('/posts', newPost);
    return response.data;
});

export const editPost = createAsyncThunk('posts/editPost', async ({ id, ...updatedPost }) => {
    const response = await linkFetch.put(`/posts/${id}`, updatedPost);
    return response.data;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (postId) => {
    await linkFetch.delete(`/posts/${postId}`);
    return postId;
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        post: null,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchPostById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.loading = false;
                state.post = action.payload;
            })
            .addCase(fetchPostById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.loading = false;
                state.posts.push(action.payload);
            })
            .addCase(createPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(editPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(editPost.fulfilled, (state, action) => {
                state.loading = false;
                const updatedPosts = state.posts.map(post => post.id === action.payload.id ? action.payload : post);
                state.posts = updatedPosts;
            })
            .addCase(editPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deletePost.pending, (state) => {
                state.loading = true;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = state.posts.filter(post => post.id !== action.payload);
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default postsSlice.reducer;
