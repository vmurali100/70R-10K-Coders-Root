import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const allProducts = {
    products : []
}

export const getAllProducts = createAsyncThunk('products/getAllProducts',()=>{
    return fetch("http://localhost:3000/products")
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
});

export const addProductsAction = createAsyncThunk('products/createProducts',(product,{dispatch})=>{
    return fetch("http://localhost:3000/products",{
        method:"POST",
        body:JSON.stringify(product),
        headers:{
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        }
    },product)
    .then(()=>{
        dispatch(getAllProducts())
    })
})

export const updateProductsAction = createAsyncThunk('products/updateProducts',(product,{dispatch})=>{
    return fetch("http://localhost:3000/products/"+product.id,{
        method:"PUT",
        body:JSON.stringify(product),
        headers:{
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        }
    },product)
    .then(()=>{
        dispatch(getAllProducts())
    })
})

export const deleteProductsAction = createAsyncThunk('products/deleteProducts',(objUrl,{dispatch})=>{
    return fetch("http://localhost:3000/products/"+objUrl.id,{
        method:"DELETE"
    },objUrl)
    .then(()=>{
        dispatch(getAllProducts())
    })
})

export const productsSlice = createSlice({
    name : "products",
    initialState : allProducts,
    extraReducers : {
       [getAllProducts.fulfilled ] : (state,action) => {
             console.log(action.payload)
             state.products = action.payload
       }
    }
})

export default productsSlice.reducer