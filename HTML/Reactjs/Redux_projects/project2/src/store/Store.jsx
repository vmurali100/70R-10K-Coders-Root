import { configureStore } from '@reduxjs/toolkit';
import  usersReducer  from  './usersSlice';

const store = configureStore({// to createstore functions that adds default to store setup
    reducer:{ // actions the previous state and returns the new state
        users: usersReducer,
    },
});

export default store