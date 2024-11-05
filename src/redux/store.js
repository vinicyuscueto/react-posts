import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../redux/redux';

const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
});

export default store;
