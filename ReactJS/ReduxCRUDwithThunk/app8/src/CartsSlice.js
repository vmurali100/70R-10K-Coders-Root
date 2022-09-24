import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const allCarts={
    carts:[]
}

export const createCrt = createAsyncThunk('carts/create',(crt,{dispatch})=>{
    return fetch('http://localhost:3214/Carts',{
        method:"POST",
        body:JSON.stringify(crt),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type':'application/json'
        }
    }).then((res)=>
    dispatch(getcartsData()))
})

export const updateCrt = createAsyncThunk('carts/update',(crt,{dispatch})=>{
    return fetch('http://localhost:3214/Carts/'+crt.id,{
        method:"PUT",
        body:JSON.stringify(crt),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type':'application/json'
        }
    }).then((res)=>
    dispatch(getcartsData()))
})

export const deleteCrt = createAsyncThunk('carts/delete',(crt,{dispatch})=>{
    return fetch('http://localhost:3214/Carts/'+crt.id,{
        method:"DELETE",
    }).then((res)=>
    dispatch(getcartsData()))
})

 export const getcartsData = createAsyncThunk('carts/gerdata',()=>{
    return fetch('http://localhost:3214/Carts').then((res)=> res.json()).catch((err)=>console.log(err))
})

export const CartsSlice = createSlice({
    name:"carts",
    initialState:allCarts,
    extraReducers:{
        [getcartsData.fulfilled]:(state,action)=>{
            state.carts = action.payload
        }
    }
})  



export default CartsSlice.reducer