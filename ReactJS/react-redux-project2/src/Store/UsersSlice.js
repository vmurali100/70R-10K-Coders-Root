import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const allUsers={
    users:[]
}

export const getAllUsers = createAsyncThunk("users/getAllUsers", ()=>{
    return fetch("http://localhost:4000/Students").then((res)=> res.json()).catch((err)=>console.log("err"))
});

export const deleteUser = createAsyncThunk("users/deleteUser",(user,{dispatch})=>{
return fetch("http://localhost:4000/Students/"+user.id,{method:"DELETE"}).then((res)=> {
    dispatch(getAllUsers())
    return res.json()
}
).catch((err)=>console.log("err"))
    // return fetch({
    //     method:"DELETE",
    //     url:`http://localhost:4000/Students/${user.id}`
    // }).then((res)=> res.json())
})
export const usersSlice = createSlice({
    name:"users",
    initialState:allUsers,
    extraReducers:{
        [getAllUsers.pending]:(state,action)=>{},
        [getAllUsers.fulfilled]:(state,action)=>{
            console.log(action.payload);
            state.users = action.payload;
        },
        [getAllUsers.rejected]:(state,action)=>{},
        [deleteUser.fulfilled]:()=>{}
    }
})

export default usersSlice.reducer;