import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const allusers = {
    users: []
}


export const getallusers = createAsyncThunk('users/getallusers', () => {
    return fetch(" http://localhost:5001/folks").then((res) => res.json()).catch((err) => console.log(err))
})

export const createuserAction = createAsyncThunk('users/createuser', (user, { dispatch }) => {
    return fetch(" http://localhost:5001/folks/", {
        method: "POST", body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }

    })

        .then(() => {
            dispatch(getallusers())
        })


})

export const updateuserAction = createAsyncThunk('users/updateuser', (user, { dispatch }) => {
    return fetch(" http://localhost:5001/folks/" + user.id, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }

    })

        .then(() => {
            dispatch(getallusers())
        })

})

export const deleteuserAction = createAsyncThunk('users/deleteuser', (user, { dispatch }) => {
    return fetch(" http://localhost:5001/folks/" + user.id, { method: 'DELETE' }).then((res) => {
        console.log(dispatch)
        dispatch(getallusers())
        return res.json()
    }

    ).catch((err) => console.log(err))


    // return fetch({
    //     method:"DELETE",
    //     url:`http://localhost:5000/data/${user.id}`
    // }).then((res)=>res.json)
})


export const userSlice = createSlice({
    name: 'users',
    initialState: allusers,
    extraReducers: {
        [getallusers.pending]: (state, action) => { },
        [getallusers.fulfilled]: (state, action) => {

            state.users = action.payload
        },
        [getallusers.rejected]: (state, action) => { },
    }
})

export default userSlice.reducer