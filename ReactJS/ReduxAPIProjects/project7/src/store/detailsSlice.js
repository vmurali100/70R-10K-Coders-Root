import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const allDetails = {
    details: [],
};
export const getAllDetails = createAsyncThunk('details/getAllDetails', () => { //it brings data from api need to pass slice name and url to get data.
    return fetch("http://localhost:5007/details/").then((res) => res.json()).catch((err) => console.log(err))
})

export const createDetailAction = createAsyncThunk('details/createDetails', (detail, { dispatch }) => {
    return fetch("http://localhost:5007/details/", {
        method: 'POST',
        body: JSON.stringify(detail),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllDetails())
    })
})
export const deleteDetailAction = createAsyncThunk('details/deleteDetails', (detail, { dispatch }) => {
    return fetch("http://localhost:5007/details/" + detail.id, {
        method: 'DELETE',
        body: JSON.stringify(detail),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllDetails())
    })
})

export const updateDetailAction = createAsyncThunk('details/updateDetails', (detail, { dispatch }) => {


    return fetch("http://localhost:5007/details/" + detail.id, {
        method: 'PUT',
        body: JSON.stringify(detail),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllDetails())
    })
})


export const detailsSlice = createSlice({
    name: "details",
    initialState: allDetails,
    extraReducers: {
        [getAllDetails.pending]: (state, action) => {},
        [getAllDetails.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.details = action.payload
        },
        [getAllDetails.rejected]: (state, action) => {}
    }

})
export default detailsSlice.reducer