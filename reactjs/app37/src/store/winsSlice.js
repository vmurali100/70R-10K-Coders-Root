import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const allwins = {
    wins: []
}

export const getallwins = createAsyncThunk('wins/getallwins', () => {
    return fetch("  http://localhost:5055/sixth").then((res) => res.json()).catch((err) => console.log(err))
})

export const createwinAction = createAsyncThunk('wins/createwinAction', (user, { dispatch }) => {
    return fetch(" http://localhost:5055/sixth", {
        method: "POST", body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(() => {
        dispatch(getallwins())
    })
})


export const updatewinAction = createAsyncThunk('wins/updatwwinAction', (user, { dispatch }) => {
    return fetch(" http://localhost:5055/sixth/" + user.id, {
        method: "PUT", body: JSON.stringify(user),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(() => {
        dispatch(getallwins())
    })
})


export const deletewinAction = createAsyncThunk('wins/deletewinAction', (user, { dispatch }) => {
    return fetch("  http://localhost:5055/sixth/" + user.id, { method: 'delete' })
        .then((res) => {
            console.log(dispatch)
            dispatch(getallwins())
            return res.json()
        }).catch((err) => console.log(err))
})


const winSlice = createSlice({
    name: 'wins',
    initialState: allwins,
    extraReducers: {
        [getallwins.pending]: (state, action) => { },
        [getallwins.fulfilled]: (state, action) => {

            state.wins = action.payload
        },
        [getallwins.rejected]: (state, action) => { },

    }


})


export default winSlice.reducer