import {configureStore} from '@reduxjs/toolkit'
import cartsReducer from './slice'

const store = configureStore({
    reducer : {
        carts : cartsReducer
    }
})

export default store