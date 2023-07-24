import { configureStore, applyMiddleware } from "@reduxjs/toolkit"
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger'
import userReducer from "./userSlice"
const store = configureStore({
    reducer: {
        users: userReducer
    }
},
    composeWithDevTools(
        applyMiddleware(logger)
        // other store enhancers if any
    )
)
export default store;