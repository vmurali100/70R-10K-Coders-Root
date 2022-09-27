import { configureStore } from '@reduxjs/toolkit';
import  objectsReducer  from  './objectsSlice';

export const store= configureStore({
    reducer:{
        objects:objectsReducer//it takes current state and after action it returns new state
    }
})
export default store