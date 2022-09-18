import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const allUsers = {
    users: []
}

export const getAllUsers = createAsyncThunk('users/getAllUsers',()=>{
    return fetch("http://localhost:3000/usersone").then((res)=> res.json()).catch((err) => console.log(err))
});

export const deleteUserAction = createAsyncThunk('users/deleteUser',(item,{dispatch})=>{
    return fetch("http://localhost:3000/usersone/"+item.id,{method : "DELETE"}).then((res)=> {
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