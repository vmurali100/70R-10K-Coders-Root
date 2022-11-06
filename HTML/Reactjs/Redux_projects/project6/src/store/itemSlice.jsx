import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const allItems ={
    items: [],
}
export const getAllItems = createAsyncThunk('items/getAllItems',()=>{
    return fetch("http://localhost:4009/posts").then((res)=>res.json()).catch((err)=> console.log(err))
})

export const createItemAction = createAsyncThunk('items/createUser',(item,{dispatch})=>{
    return fetch("http://localhost:4009/posts/",{
        method: "POST", body:JSON.stringify(item),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllItems());

    })
    
})

export const updateItemAction= createAsyncThunk('items/updateUser',(item, {dispatch})=>{
    return fetch("http://localhost:4009/posts/"+item.id,{
        method: "PUT", body:JSON.stringify(item),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllItems());

    })
})

export const deleteItemAction = createAsyncThunk('items/deleteUser',(item, {dispatch})=>{
    console.log(item)
    return fetch("http://localhost:4009/posts/" + item.id,{method:'DELETE'}).then((res)=>{
        console.log(dispatch)
        dispatch(getAllItems())
        return res.json()
    }
    
    
    ).catch((err)=>console.log(err)) // it means after getting data from server we are giving call back funtn 

    
})

export const itemsSlice = createSlice({
    name:"items",
    initialState: allItems,
    extraReducers:{
        [getAllItems.pending]:(state,action)=>{},
        [getAllItems.fulfilled]:(state,action)=>{
            // console.log(action.payload)
            state.items = action.payload
        },
        [getAllItems.rejected]:(state,action)=>{},
        
    },
});

export default itemsSlice.reducer