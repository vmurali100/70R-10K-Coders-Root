import {configureStore} from '@reduxjs/toolkit'
import photosReducer from './photosslice'
const store = configureStore({
    reducer : {
        photos : photosReducer
    }
})

export default store;