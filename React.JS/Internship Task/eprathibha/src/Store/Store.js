import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';

const store = configureStore({
    reducer : rootReducer
})
const okay = store.getState()
console.log(okay)


export default store;