import { configureStore } from '@reduxjs/toolkit';
import typesReducer    from  './typesSlice';

const store = configureStore({
    reducer:{ 
        types: typesReducer,
    },
});

export default store