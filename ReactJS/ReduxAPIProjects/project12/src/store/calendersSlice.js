import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const allCalenders = {
    calenders: [],
};
export const getAllCalenders = createAsyncThunk('calenders/getAllCalenders', () => { //it brings data from api need to pass slice name and url to get data.
    return fetch("http://localhost:5012/calenders/").then((res) => res.json()).catch((err) => console.log(err))
})

export const createCalenderAction = createAsyncThunk('calenders/createCalenders', (calender, { dispatch }) => {
    return fetch("http://localhost:5012/calenders/", {
        method: 'POST',
        body: JSON.stringify(calender),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllCalenders())
    })
})
export const deleteCalenderAction = createAsyncThunk('calenders/deleteCalenders', (calender, { dispatch }) => {
    return fetch("http://localhost:5012/calenders/" + calender.id, {
        method: 'DELETE',
        body: JSON.stringify(calender),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllCalenders())
    })
})

export const updateCalenderAction = createAsyncThunk('calenders/updateCalenders', (calender, { dispatch }) => {


    return fetch("http://localhost:5012/calenders/" + calender.id, {
        method: 'PUT',
        body: JSON.stringify(calender),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllCalenders())
    })
})


export const calendersSlice = createSlice({
    name: "calenders",
    initialState: allCalenders,
    extraReducers: {
        [getAllCalenders.pending]: (state, action) => {},
        [getAllCalenders.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.calenders = action.payload
        },
        [getAllCalenders.rejected]: (state, action) => {}
    }

})
export default calendersSlice.reducer