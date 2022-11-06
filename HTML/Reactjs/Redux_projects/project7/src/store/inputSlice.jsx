import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const allInputs ={
    inputs: [],
}
export const getAllInputs = createAsyncThunk('inputs/getAllInputs',()=>{
    return fetch("http://localhost:4007/details").then((res)=>res.json()).catch((err)=> console.log(err))
})

export const createInputAction = createAsyncThunk('inputs/createUser',(Input,{dispatch})=>{
    return fetch("http://localhost:4007/details/",{
        method: "POST", body:JSON.stringify(Input),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllInputs());

    })
    
})

export const updateInputAction= createAsyncThunk('inputs/updateUser',(Input, {dispatch})=>{
    return fetch("http://localhost:4007/details/"+Input.id,{
        method: "PUT", body:JSON.stringify(Input),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllInputs());

    })
})

export const deleteInputAction = createAsyncThunk('inputs/deleteUser',(Input, {dispatch})=>{
    console.log(Input)
    return fetch("http://localhost:4007/details/" + Input.id,{method:'DELETE'}).then((res)=>{
        console.log(dispatch)
        dispatch(getAllInputs())
        return res.json()
    }
    
    
    ).catch((err)=>console.log(err)) // it means after getting data from server we are giving call back funtn 

    
})

export const inputsSlice = createSlice({
    name:"inputs",
    initialState: allInputs,
    extraReducers:{
        [getAllInputs.pending]:(state,action)=>{},
        [getAllInputs.fulfilled]:(state,action)=>{
            // console.log(action.payload)
            state.inputs = action.payload
        },
        [getAllInputs.rejected]:(state,action)=>{},
        
    },
});

export default inputsSlice.reducer