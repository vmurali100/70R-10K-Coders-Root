import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const allUsers ={
    users: [],
}
export const getAllUsers = createAsyncThunk('users/getAllUsers',()=>{
    return fetch("http://localhost:4002/lists").then((res)=>res.json()).catch((err)=> console.log(err))
})//it used to get the data from the AAPI

export const createUserAction = createAsyncThunk('users/createUser',(user,{dispatch})=>{
    return fetch("http://localhost:4002/lists/",{
        method: "POST", body:JSON.stringify(user),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllUsers());

    })
    
})

export const updateUserAction= createAsyncThunk('users/updateUser',(user, {dispatch})=>{
    return fetch("http://localhost:4002/lists/"+user.id,{
        method: "PUT", body:JSON.stringify(user),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllUsers());

    })
})

export const deleteUserAction = createAsyncThunk('users/deleteUser',(user, {dispatch})=>{
    console.log(user)
    return fetch("http://localhost:4002/lists/" + user.id,{method:'DELETE'}).then((res)=>{
        console.log(dispatch)
        dispatch(getAllUsers())
        return res.json()
    }
    
    
    ).catch((err)=>console.log(err)) // it means after getting data from server we are giving call back funtn 

    
})

export const userSlice = createSlice({
    name:"users",
    initialState: allUsers,
    extraReducers:{
        [getAllUsers.pending]:(state,action)=>{},
        [getAllUsers.fulfilled]:(state,action)=>{
            // console.log(action.payload)
            state.users = action.payload
        },
        [getAllUsers.rejected]:(state,action)=>{},
        
    },
});

export default userSlice.reducer