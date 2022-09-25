import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const allUsers = {
    users: []
}

export const getallusers = createAsyncThunk('users/getallusers', () => {
    return fetch("http://localhost:5008/eight").then((res) => res.json()).catch((err) => console.log(err))
})

export const createuserAction = createAsyncThunk('users/createuser', (user, { dispatch }) => {
    return fetch("http://localhost:5008/eight", {
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
    return fetch("http://localhost:5008/eight/" + user.id, {
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
    return fetch("http://localhost:5008/eight/" + user.id, { method: 'DELETE' }).then((res) => {
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
    initialState: allUsers,
    extraReducers: {
        [getallusers.pending]: (state, action) => { },
        [getallusers.fulfilled]: (state, action) => {

            state.users = action.payload
        },
        [getallusers.rejected]: (state, action) => { },
        // [deleteuser.fulfilled]:(state,action)=>{
        //     getallusers()
        // },

    }
})



export default userSlice.reducer