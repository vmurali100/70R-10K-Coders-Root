import {configureStore} from '@reduxjs/toolkit'
import filltextReducer from './slice'

const store = configureStore({
    reducer : {
        filltexttwo : filltextReducer
    }
})

export default store