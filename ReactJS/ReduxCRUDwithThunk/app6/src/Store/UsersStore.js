import {configureStore} from '@reduxjs/toolkit';
import usersReducers from './UsersSlice';

export const store = configureStore({
    reducer:{
        users:usersReducers
    }
})

export default store;