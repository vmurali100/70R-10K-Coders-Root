import { configureStore } from '@reduxjs/toolkit';
import  calendersReducer  from  './calendersSlice';

export const store= configureStore({
    reducer:{
        calenders:calendersReducer
    }
})
export default store