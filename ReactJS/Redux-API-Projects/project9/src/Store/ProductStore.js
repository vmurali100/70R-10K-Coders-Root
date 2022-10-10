import {configureStore} from '@reduxjs/toolkit'
import productReducer from './ProductSlice'
const ProductStore = configureStore({
    reducer:{
        products:productReducer
    }
})

export default ProductStore