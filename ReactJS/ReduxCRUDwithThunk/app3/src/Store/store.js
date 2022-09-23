import {configureStore} from '@reduxjs/toolkit';
import AlbumReducer from './AlbumsSlice';


const store = configureStore({
    reducer:{
        Albums:AlbumReducer,
    }
})

export default store;