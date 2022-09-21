import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const allUsers = {
    users: [],
};

export const getAllUsers = createAsyncThunk('users/getAllUsers', () => { //it brings data from api need to pass slice name and url to get data.
    return fetch("http://localhost:5002/posts/").then((res) => res.json()).catch((err) => console.log(err))
})
export const createUserAction = createAsyncThunk('users/createUsers', (user, { dispatch }) => {
    return fetch("http://localhost:5002/posts/", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllUsers())
    })
})
export const deleteUserAction = createAsyncThunk('users/deleteUsers', (user, { dispatch }) => {
    return fetch("http://localhost:5002/posts/" + user.id, {
        method: 'DELETE',
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllUsers())
    })
})

export const updateUserAction = createAsyncThunk('users/updateUsers', (user, { dispatch }) => {


    return fetch("http://localhost:5002/posts/" + user.id, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllUsers())
    })
})



export const usersSlice = createSlice({ //accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected 
    name: "users",
    initialState: allUsers,
    extraReducers: { //asynchronic behaviours or extra actions performing.
        [getAllUsers.pending]: (state, action) => {},
        [getAllUsers.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.users = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {}

    }

})
export default usersSlice.reducer