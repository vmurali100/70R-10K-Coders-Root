import {configureStore} from '@reduxjs/toolkit'
import filltextReducer from './slice'

const store = configureStore({
    reducer : {
        filltextthree : filltextReducer
    }
})

export default store