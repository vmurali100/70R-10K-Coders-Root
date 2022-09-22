import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const allProducts ={
    products: [],
}
export const getAllProducts = createAsyncThunk('products/getAllProducts',()=>{
    return fetch("http://localhost:4005/products").then((res)=>res.json()).catch((err)=> console.log(err))
})//it used to get the data from the AAPI

export const createProductAction = createAsyncThunk('products/createUser',(product,{dispatch})=>{
    return fetch("http://localhost:4005/products/",{
        method: "POST", body:JSON.stringify(product),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-product': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllProducts());

    })
    
})

export const updateProductAction= createAsyncThunk('products/updateUser',(product, {dispatch})=>{
    return fetch("http://localhost:4005/products/"+product.id,{
        method: "PUT", body:JSON.stringify(product),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-product': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllProducts());

    })
})

export const deleteProductAction = createAsyncThunk('products/deleteUser',(product, {dispatch})=>{
    console.log(product)
    return fetch("http://localhost:4005/products/" + product.id,{method:'DELETE'}).then((res)=>{
        console.log(dispatch)
        dispatch(getAllProducts())
        return res.json()
    }
    
    
    ).catch((err)=>console.log(err)) // it means after getting data from server we are giving call back funtn 

    
})

export const productsSlice = createSlice({
    name:"products",
    initialState: allProducts,
    extraReducers:{
        [getAllProducts.pending]:(state,action)=>{},
        [getAllProducts.fulfilled]:(state,action)=>{
            // console.log(action.payload)
            state.products = action.payload
        },
        [getAllProducts.rejected]:(state,action)=>{},
        
    },
});

export default productsSlice.reducer