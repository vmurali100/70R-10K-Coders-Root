import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const allProducts = {
    products: [],
};
export const getAllProducts = createAsyncThunk('products/getAllProducts', () => { //it brings data from api need to pass slice name and url to get data.
    return fetch("http://localhost:5010/products/").then((res) => res.json()).catch((err) => console.log(err))
})

export const createProductAction = createAsyncThunk('products/createProducts', (product, { dispatch }) => {
    return fetch("http://localhost:5010/products/", {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllProducts())
    })
})
export const deleteProductAction = createAsyncThunk('products/deleteProducts', (product, { dispatch }) => {
    return fetch("http://localhost:5010/products/" + product.id, {
        method: 'DELETE',
        body: JSON.stringify(product),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllProducts())
    })
})

export const updateProductAction = createAsyncThunk('products/updateProducts', (product, { dispatch }) => {


    return fetch("http://localhost:5010/products/" + product.id, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllProducts())
    })
})


export const productsSlice = createSlice({
    name: "products",
    initialState: allProducts,
    extraReducers: {
        [getAllProducts.pending]: (state, action) => {},
        [getAllProducts.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.products = action.payload
        },
        [getAllProducts.rejected]: (state, action) => {}
    }

})
export default productsSlice.reducer