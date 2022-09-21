import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../TodosSlice';


const store = configureStore({
    reducer:{
        todos:todoReducer,
    }
})

export default store;