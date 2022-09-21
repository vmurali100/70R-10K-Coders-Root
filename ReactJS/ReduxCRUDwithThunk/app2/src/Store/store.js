import {configureStore} from '@reduxjs/toolkit';
import commentsReducer from '../CommentsSlice';

const store = configureStore({
    reducer:{
        comments:commentsReducer,
    }
})


export default store;