import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const allUsers = {
    user: [],
}
let url = "http://localhost:3000/users/"
// for displaying Purpose
export const getallUsers = createAsyncThunk('user/getallUsers', () => {
    return fetch(url).then((res) => res.json()).catch((err) => console.log(err))
})
// for creating Purpose
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
    return fetch(url + user.id, { method: 'DELETE' }).then((res) => {
        dispatch(getallUsers()) 
        return res.json()
    }).catch((err) => console.log(err))
})


// for editing purpose
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