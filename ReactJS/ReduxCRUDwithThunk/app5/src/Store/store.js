import {configureStore} from '@reduxjs/toolkit';
import photoReducer from './PhotosSlice';

const store = configureStore({
    reducer:{
        photos:photoReducer
    }
})

export default store;