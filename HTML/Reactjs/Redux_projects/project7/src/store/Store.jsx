import { configureStore } from '@reduxjs/toolkit';
import inputsReducer    from  './inputsSlice';

const store = configureStore({
    reducer:{ 
        inputs: inputsReducer,
    },
});

export default store