import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const allUsers = {
    user: [],
}
let url = "http://localhost:3000/albums/"
// for displaying Purpose
export const getallUsers = createAsyncThunk('user/getallUsers', () => {
    return fetch(url).then((res) => res.json()).catch((err) => console.log(err))
})

export const createUsersAction = createAsyncThunk('user/createuser', (user, { dispatch }) => {
    return fetch(url,
        {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json,textplain,*/*',
                'Content-type': 'application/json'
            }
        })
        .then((res) => {
            dispatch(getallUsers())
        })
})

// for deleting purpose
export const deleteUsersAction = createAsyncThunk('user/deleteUsers', (user, { dispatch }) => {
    // console.log(user)
    return fetch(url + user.id, { method: 'DELETE' }).then((res) => {
        // console.log(dispatch)
        dispatch(getallUsers()) // used to retrieve the data after user can deleted
        return res.json()
    }).catch((err) => console.log(err))
    //  return fetch({
    //      method:"DELETE",
    //      url: `http://localhost:3000/checkins/${user.id}`
    //  }).then((res)=> res.json())
})

export const editUsersAction = createAsyncThunk('user/edituser', (user, { dispatch }) => {
    return fetch(url+user.id, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json,textplain,*/*',
                'Content-type': 'application/json'
            }
        })
        .then((res) => {
            dispatch(getallUsers())
        })
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


        [deleteUsersAction.fulfilled]: (state, action) => {
            console.log(state)
        },
    }
})

export default Slice.reducer