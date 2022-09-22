import { configureStore } from '@reduxjs/toolkit';
import  collegesReducer  from  './collegesSlice';

export const store= configureStore({
    reducer:{
        colleges:collegesReducer
    }
})
export default store