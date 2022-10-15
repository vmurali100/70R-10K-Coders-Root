import {configureStore} from '@reduxjs/toolkit'
import  userReducer  from './Slice';


const store = configureStore({
    reducer : {
        user : userReducer
    }
})

// const first = store.getState() //returns the initial values of the store.
// console.log(first)

export default store;