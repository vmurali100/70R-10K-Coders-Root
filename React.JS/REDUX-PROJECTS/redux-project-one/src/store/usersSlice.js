import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const allUsers = {
    users: []
}

export const getAllUsers = createAsyncThunk('users/getAllUsers',()=>{
    return fetch("http://localhost:3201/usersone").then((res)=> res.json()).catch((err) => console.log(err))
});

export const createUserAction = createAsyncThunk('users/createUser',(user,{dispatch})=>{
    return fetch("http://localhost:3201/usersone",{
        method:"POST",
        body: JSON.stringify(user),
        headers:{
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        }
    },user).then(()=>{
        dispatch(getAllUsers())
    })
})

export const updateUserAction = createAsyncThunk('users/updateUser',(user,{dispatch})=>{
    return fetch("http://localhost:3201/usersone/"+ user.id,{
        method:"PUT",
        body: JSON.stringify(user),
        headers:{
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        }
    },user).then(()=>{
        dispatch(getAllUsers())
    })
})

export const deleteUserAction = createAsyncThunk('users/deleteUser',(item,{dispatch})=>{
    return fetch("http://localhost:3201/usersone/"+item.id,{method : "DELETE"}).then((res)=> {
    dispatch(getAllUsers()) 
    return res.json()}
    )
     .catch((err) => console.log(err))
   
});

export const userSlice = createSlice({
    name: "users",
    initialState: allUsers,
    extraReducers : {
        [getAllUsers.pending] : (state,action) => {},
        [getAllUsers.fulfilled] : (state,action) => {
            console.log(action.payload);
            state.users = action.payload;
        },
        [getAllUsers.rejected] : (state,action) => {},
        
        
    }
})

export default userSlice.reducer