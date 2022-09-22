import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const allCarts = {
    carts : []
}

export const getAllCarts = createAsyncThunk('carts/getAllCarts',()=>{
    return fetch("http://localhost:3000/items")
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
});

export const addCartAction = createAsyncThunk('carts/createCart',(cart,{dispatch})=>{
    return fetch("http://localhost:3000/items",{
        method:"POST",
        body:JSON.stringify(cart),
        headers:{
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        }
    },cart)
    .then(()=>{
        dispatch(getAllCarts())
    })
})

export const updateCartAction = createAsyncThunk('carts/updateCart',(cart,{dispatch})=>{
    return fetch("http://localhost:3000/items/"+cart.id,{
        method:"PUT",
        body:JSON.stringify(cart),
        headers:{
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        }
    },cart)
    .then(()=>{
        dispatch(getAllCarts())
    })
})

export const deleteCartAction = createAsyncThunk('carts/deleteCart',(objUrl,{dispatch})=>{
    return fetch("http://localhost:3000/items/"+objUrl.id,{
        method:"DELETE"
    },objUrl)
    .then(()=>{
        dispatch(getAllCarts())
    })
})

export const cartsSlice = createSlice({
    name : "carts",
    initialState : allCarts,
    extraReducers : {
       [getAllCarts.fulfilled ] : (state,action) => {
             console.log(action.payload)
             state.carts = action.payload
       }
    }
})

export default cartsSlice.reducer