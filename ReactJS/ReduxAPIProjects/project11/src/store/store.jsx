import { configureStore } from '@reduxjs/toolkit';
import  cartsReducer  from  './cartsSlice';

export const store= configureStore({
    reducer:{
        carts:cartsReducer
    }
})
export default store