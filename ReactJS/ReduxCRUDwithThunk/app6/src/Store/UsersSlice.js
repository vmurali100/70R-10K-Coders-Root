import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';


const allUsers ={
    users:[]
}

export const getAllUsers=createAsyncThunk('users/getAllUsers', ()=>{
    return fetch("http://localhost:3212/Users").then((res)=> res.json()).catch((err)=> console.log(err))
})

export const createUser = createAsyncThunk('users/createUser',(user,{dispatch})=>{
    return fetch('http://localhost:3212/Users/',{
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type':'application/json'
        }
    }).then((res)=>{
        dispatch(getAllUsers())
    })
})

export const updateUser = createAsyncThunk('users/updateUser',(user,{dispatch})=>{
    return fetch('http://localhost:3212/Users/'+user.id,{
        method:"PUT",
        body:JSON.stringify(user),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type':"application/json",
        }
    }).then((res)=>{
        dispatch(getAllUsers())
    })
})

export const deleteUser = createAsyncThunk('users/deleteUser' ,(user,{dispatch})=>{
    return fetch('http://localhost:3212/Users/'+user.id,{
        method:"DELETE",
        body:JSON.stringify(user),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type':'application/json'
        }
    }).then((res)=>{
        dispatch(getAllUsers())
    })
})
export const UsersSlice = createSlice({
    name:"users",
    initialState:allUsers,
    extraReducers:{
    [getAllUsers.fulfilled]:(state,action)=>{
        state.users = action.payload
    }
    }
})

export default UsersSlice.reducer