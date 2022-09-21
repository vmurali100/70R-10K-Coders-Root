import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './Slice'


const Store = configureStore({
    reducer:{
        user:usersReducer
    }
})

export default Store