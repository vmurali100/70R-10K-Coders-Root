import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const allUsers = {
    users: []
}
export const getAllUsers = createAsyncThunk('users/getAllUsers', () => {
    return fetch("http://localhost:3001/students/").then((res) => res.json()).catch((err) => console.log(err))
}

)
export const createUserAction =createAsyncThunk('users/createUser',(user,{dispatch})=>{
    return fetch("http://localhost:3001/students/",{method:'POST',body:JSON.stringify(user), headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type':'application/json'
    },}).then(()=>{
        dispatch(getAllUsers())
    })
})
export const updateUserAction = createAsyncThunk('users/updateUser',(user,{dispatch})=>{
    return fetch("http://localhost:3001/students/"+user.id,{method:'PUT',body:JSON.stringify(user), headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type':'application/json'
    },}).then(()=>{
        dispatch(getAllUsers())
    })
})
export const deleteUserAction = createAsyncThunk('users/deleteUser', (user,{dispatch}) => {
    return fetch("http://localhost:3001/students/" + user.id, { method: 'DELETE' }).then((res) =>{
        console.log(dispatch)
        dispatch(getAllUsers())
 return res.json()
 

    {/*return fetch({
        method:"DELETE",
        url:`http://localhost:3001/students/${user.id}`
    }).then((res)=>res.json)*/}
}
).catch((err)=>console.log(err))
})
export const userSlice = createSlice({
    name: "users",
    initialState: allUsers,
    extraReducers: {
        [getAllUsers.pending]: (state, action) => { },
        [getAllUsers.fulfilled]: (state, action) => {

            state.users = action.payload
        },
        [getAllUsers.rejected]: (state, action) => { },
        
    }
})
export default userSlice.reducer