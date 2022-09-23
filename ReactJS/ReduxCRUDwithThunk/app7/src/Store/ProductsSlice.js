import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const allProducts={
    products:[]
}

export const createProducts = createAsyncThunk('products/create', (prod,{dispatch})=>{
    return fetch('http://localhost:3214/ReduxFillProds',{
        method:"POST",
        body:JSON.stringify(prod),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type':'application/json'
        }
    }).then((res)=>{
        dispatch(getAllproducts())
    })
})


export const updateProducts = createAsyncThunk('products/update', (prod,{dispatch})=>{
    return fetch('http://localhost:3214/ReduxFillProds/'+prod.id,{
        method:"PUT",
        body:JSON.stringify(prod),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type':'application/json'
        }
    }).then((res)=>{
        dispatch(getAllproducts())
    })
})

export const getAllproducts = createAsyncThunk('products/getAllproducts',()=>{
    return fetch('http://localhost:3214/ReduxFillProds'
    ).then((res)=>res.json()).catch((err)=>console.log(err))
})

export const deleteProducts = createAsyncThunk('products/delete', (objUrl,{dispatch})=>{
    return fetch('http://localhost:3214/ReduxFillProds/'+objUrl.id,{
        method:"DELETE",
        // body:JSON.stringify(prod),
        // headers:{
        //     'Accept':'application/json, text/plain, */*',
        //     'Content-Type':'application/json'
        // }
    }).then((res)=>{
        dispatch(getAllproducts())
    })
})

export const ProductsSlice = createSlice({
    name:"products",
    initialState:allProducts,
    extraReducers:{
        [getAllproducts.fulfilled]:(state,action)=>{
            state.products = action.payload     
        }
    }
})

export default ProductsSlice.reducer;