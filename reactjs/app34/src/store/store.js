import {configureStore} from '@reduxjs/toolkit'
import winsReducer from './winsSlice'

const store=configureStore({
    reducer:{
        wins:winsReducer
    }
})

export default store