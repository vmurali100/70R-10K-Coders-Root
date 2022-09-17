import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './Slice'


const store = configureStore({
    reducer:{
        user:usersReducer
    }
})

export default store