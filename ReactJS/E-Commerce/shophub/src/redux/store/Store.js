import { configureStore } from "@reduxjs/toolkit"; 
import rootReducers from "../reducers/Reducer";

// it accepts a single configuration object parameter and defines the function to be used as the rootReducer
const Store = configureStore({
    reducer: rootReducers
})

export default Store