import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const allUsers = {
    user: [],
}
// for displaying Purpose
export const getallUsers = createAsyncThunk('user/getallUsers', () => {
    return fetch("http://localhost:3000/checkins").then((res) => res.json()).catch((err) => console.log(err))
})

// for deleting purpose
export const deleteUsers = createAsyncThunk('user/deleteUsers',(user,{dispatch})=>{
    // console.log(user)
     return fetch("http://localhost:3000/checkins/"+user.id,{method:'DELETE'}).then((res) => {
        // console.log(dispatch)
        dispatch(getallUsers()) // used to retrieve the data after user can deleted
        return res.json()
     }).catch((err) => console.log(err))
    //  return fetch({
    //      method:"DELETE",
    //      url: `http://localhost:3000/checkins/${user.id}`
    //  }).then((res)=> res.json())
})
export const Slice = createSlice({
    name: "user",
    initialState: allUsers,
    extraReducers: {
        [getallUsers.pending]: (state, action) => { },
        [getallUsers.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.user = action.payload
        },
        [getallUsers.rejected]: (state, action) => { },


        [deleteUsers.fulfilled]:(state,action)=>{
            console.log(state)
        },
    }
})

export default Slice.reducer