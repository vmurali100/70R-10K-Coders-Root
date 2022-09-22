import {configureStore} from '@reduxjs/toolkit'
import filltextReducer from './slice'

const store = configureStore({
    reducer : {
        filltextone : filltextReducer
    }
})

export default store