import {configureStore} from '@reduxjs/toolkit'
import appReducer from '../reducer';


// const store = configureStore({
//     reducer : {
//         user : appReducer
//     }
// })

const store = configureStore({
    reducer : appReducer
})

// const first = store.getState() //returns the initial values of the store.
// console.log(first)

export default store;