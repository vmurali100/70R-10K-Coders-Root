import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const allProducts = {
    products: []
}

export const getProducts = createAsyncThunk('products/getProducts', () => {
    return fetch("http://localhost:3000/products").then((res) => res.json()).catch((err) => console.log(err))
})

export const ProductSlice = createSlice({
    name: 'products',
    initialState: allProducts,
    extraReducers: {
        [getProducts.pending]: (state, action) => { },
        [getProducts.fulfilled]: (state, action) => { 
            state.products=action.payload
         },
        [getProducts.rejected]: (state, action) => { }
    }
})


export default ProductSlice.reducer