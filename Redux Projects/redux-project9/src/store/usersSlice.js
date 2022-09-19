import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const allUsers = {
  users: [],
};
export const getAllUsers = createAsyncThunk("users/getAllUsers", () => {
  return fetch("http://localhost:4008/user")
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

export const createUserAction=createAsyncThunk('users/createUser',(user,{dispatch})=>{
    return fetch("http://localhost:4008/user/",{
        method:"POST",body:JSON.stringify(user),
        headers:{
            'Accept':'application/json,text/plain,*/*',
            'Content-Type':'application/json'
        }
    }).then(()=>{dispatch(getAllUsers())})
})
export const updateUserAction=createAsyncThunk('users/updateUser',(user,{dispatch})=>{
    return fetch("http://localhost:4008/user/"+user.id,{
        method:"PUT",body:JSON.stringify(user),
        headers:{
            'Accept':'application/json,text/plain,*/*',
            'Content-Type':'application/json'
        }
    }).then(()=>{dispatch(getAllUsers())})
})


export const deleteUserAction=createAsyncThunk('users/deleteUser',(user,{dispatch})=>{
return fetch("http://localhost:4008/user/"+user.id,{method:"DELETE"}).then((res)=>{
    dispatch(getAllUsers())
    return res.json()
}).catch((err)=>console.log(err))
})

export const userSlice = createSlice({
  name: "users",
  initialState: allUsers,
  extraReducers: {
    [getAllUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [getAllUsers.pending]: (state, action) => {},
    [getAllUsers.rejected]: (state, action) => {},
    [deleteUserAction.fulfilled]: (state, action) => {
      
    },
  },
});

export default userSlice.reducer;
