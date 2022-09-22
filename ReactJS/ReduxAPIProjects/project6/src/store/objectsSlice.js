import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const allObjects = {
    objects: [],
};
export const getAllObjects = createAsyncThunk('objects/getAllObjects', () => { //it brings data from api need to pass slice name and url to get data.
    return fetch("http://localhost:5006/users/").then((res) => res.json()).catch((err) => console.log(err))
})

export const createObjectAction = createAsyncThunk('objects/createObjects', (object, { dispatch }) => {
    return fetch("http://localhost:5006/users/", {
        method: 'POST',
        body: JSON.stringify(object),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllObjects())
    })
})
export const deleteObjectAction = createAsyncThunk('objects/deleteObjects', (object, { dispatch }) => {
    return fetch("http://localhost:5006/users/" + object.id, {
        method: 'DELETE',
        body: JSON.stringify(object),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllObjects())
    })
})

export const updateObjectAction = createAsyncThunk('objects/updateObjects', (object, { dispatch }) => {


    return fetch("http://localhost:5006/users/" + object.id, {
        method: 'PUT',
        body: JSON.stringify(object),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllObjects())
    })
})


export const objectsSlice = createSlice({
    name: "objects",
    initialState: allObjects,
    extraReducers: {
        [getAllObjects.pending]: (state, action) => {},
        [getAllObjects.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.objects = action.payload
        },
        [getAllObjects.rejected]: (state, action) => {}
    }

})
export default objectsSlice.reducer