import {configureStore} from '@reduxjs/toolkit'
import albumsReducer from './Slice'

const store = configureStore({
    reducer : {
        albums : albumsReducer
    }
})

export default store