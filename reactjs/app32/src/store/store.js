import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './userslice'

const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

export default store