import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const allUsers = {
    users: [],
};
export const getAllUsers = createAsyncThunk('users/getAllUsers', () => { //it brings data from api need to pass slice name and url to get data.
    return fetch("http://localhost:5001/post/").then((res) => res.json()).catch((err) => console.log(err))
})

export const createUserAction = createAsyncThunk('users/createUsers', (user, { dispatch }) => {
    return fetch("http://localhost:5001/post/", {
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
export const updateUserAction = createAsyncThunk('users/updateUsers', (user, { dispatch }) => {


    return fetch("http://localhost:5001/post/" + user.id, {
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




export const deleteUserAction = createAsyncThunk('users/deleteUser', (user, { dispatch }) => {
    console.log(user)
    return fetch("http://localhost:5001/post/" + user.id, { method: 'DELETE' }).then((res) => {
            console.log(dispatch)
            dispatch(getAllUsers())
            return res.json()
        }


    ).catch((err) => console.log(err))

    // return fetch({
    //     method:"DELETE",
    //     url: `http://localhost:5001/post/${user.id}`
    // }).then((res)=> res.json())
})

export const userSlice = createSlice({
    name: "users",
    initialState: allUsers,
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {},
        [getAllUsers.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.users = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {},

    },
});

export default userSlice.reducer