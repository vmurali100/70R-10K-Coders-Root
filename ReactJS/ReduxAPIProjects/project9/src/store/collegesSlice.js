import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const allColleges = {
    colleges: [],
};
export const getAllColleges = createAsyncThunk('colleges/getAllColleges', () => { //it brings data from api need to pass slice name and url to get data.
    return fetch("http://localhost:5009/college/").then((res) => res.json()).catch((err) => console.log(err))
})

export const createCollegeAction = createAsyncThunk('colleges/createColleges', (college, { dispatch }) => {
    return fetch("http://localhost:5009/college/", {
        method: 'POST',
        body: JSON.stringify(college),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllColleges())
    })
})
export const deleteCollegeAction = createAsyncThunk('colleges/deleteColleges', (college, { dispatch }) => {
    return fetch("http://localhost:5009/college/" + college.id, {
        method: 'DELETE',
        body: JSON.stringify(college),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllColleges())
    })
})

export const updateCollegeAction = createAsyncThunk('colleges/updateColleges', (college, { dispatch }) => {


    return fetch("http://localhost:5009/college/" + college.id, {
        method: 'PUT',
        body: JSON.stringify(college),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllColleges())
    })
})


export const collegesSlice = createSlice({
    name: "colleges",
    initialState: allColleges,
    extraReducers: {
        [getAllColleges.pending]: (state, action) => {},
        [getAllColleges.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.colleges = action.payload
        },
        [getAllColleges.rejected]: (state, action) => {}
    }

})
export default collegesSlice.reducer