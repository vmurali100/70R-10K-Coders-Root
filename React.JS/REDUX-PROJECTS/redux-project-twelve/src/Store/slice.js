import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const allUsers = {
    users : []
}


export const getallUsers = createAsyncThunk('users/getUsers',()=>{
    return fetch("http://localhost:3000/items")
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
});

export const createUserAction = createAsyncThunk('users/edituser',(user,{dispatch})=>{
    return fetch("http://localhost:3000/items",{
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        }

    },user)
    .then(()=>{
        dispatch(getallUsers())
    })
})

export const editUserAction = createAsyncThunk('users/editUser',(user,{dispatch})=>{
    return fetch("http://localhost:3000/items/"+user.id,{
        method:"PUT",
        body:JSON.stringify(user),
        headers:{
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        }
    },user).then(()=>{
        dispatch(getallUsers())
    })
})

export const deleteUserAction = createAsyncThunk('users/deleteUser',(objUrl,{dispatch})=>{
    return fetch("http://localhost:3000/items/"+objUrl.id,{
        method:"DELETE"
    }).then(()=>{
        dispatch(getallUsers())
    })
})


const userSlice = createSlice({
    name : "users" ,
    initialState : allUsers,
    extraReducers : {
        [getallUsers.pending] : (state,action) => {},
        [getallUsers.fulfilled] : (state,action) => {
            console.log(action.payload);
            state.users = action.payload;
        }
    } 
});


export default userSlice.reducer