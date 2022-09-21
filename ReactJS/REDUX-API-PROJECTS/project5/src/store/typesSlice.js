import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const allTypes ={
    types: [],
}
export const getallTypes = createAsyncThunk('types/getallTypes',()=>{
    return fetch("http://localhost:4005/products").then((res)=>res.json()).catch((err)=> console.log(err))
})//it used to get the data from the AAPI

export const createTypeAction = createAsyncThunk('types/createUser',(type,{dispatch})=>{
    return fetch("http://localhost:4005/products/",{
        method: "POST", body:JSON.stringify(type),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getallTypes());

    })
    
})

export const updateTypeAction= createAsyncThunk('types/updateUser',(type, {dispatch})=>{
    return fetch("http://localhost:4005/products/"+type.id,{
        method: "PUT", body:JSON.stringify(type),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getallTypes());

    })
})

export const deleteTypeAction = createAsyncThunk('types/deleteUser',(type, {dispatch})=>{
    console.log(type)
    return fetch("http://localhost:4005/products/" + type.id,{method:'DELETE'}).then((res)=>{
        console.log(dispatch)
        dispatch(getallTypes())
        return res.json()
    }
    
    
    ).catch((err)=>console.log(err)) // it means after getting data from server we are giving call back funtn 

    
})

export const typesSlice = createSlice({
    name:"types",
    initialState: allTypes,
    extraReducers:{
        [getallTypes.pending]:(state,action)=>{},
        [getallTypes.fulfilled]:(state,action)=>{
            // console.log(action.payload)
            state.types = action.payload
        },
        [getallTypes.rejected]:(state,action)=>{},
        
    },
});

export default typesSlice.reducer