import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from './slice'

const store = configureStore({
    reducer : {
         comments : commentsReducer
    }
})

export default store;