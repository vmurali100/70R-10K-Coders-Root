import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const allPhotos = {
    photos: [],
};
export const getAllPhotos = createAsyncThunk('photos/getAllPhotos', () => { //it brings data from api need to pass slice name and url to get data.
    return fetch("  http://localhost:5005/photos/").then((res) => res.json()).catch((err) => console.log(err))
})

export const createPhotoAction = createAsyncThunk('photos/createPhotos', (photo, { dispatch }) => {
    return fetch("  http://localhost:5005/photos/", {
        method: 'POST',
        body: JSON.stringify(photo),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllPhotos())
    })
})
export const deletePhotoAction = createAsyncThunk('photos/deletePhotos', (photo, { dispatch }) => {
    return fetch("  http://localhost:5005/photos/" + photo.id, {
        method: 'DELETE',
        body: JSON.stringify(photo),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllPhotos())
    })
})

export const updatePhotoAction = createAsyncThunk('photos/updatePhotos', (photo, { dispatch }) => {


    return fetch("  http://localhost:5005/photos/" + photo.id, {
        method: 'PUT',
        body: JSON.stringify(photo),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllPhotos())
    })
})


export const photosSlice = createSlice({
    name: "photos",
    initialState: allPhotos,
    extraReducers: {
        [getAllPhotos.pending]: (state, action) => {},
        [getAllPhotos.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.photos = action.payload
        },
        [getAllPhotos.rejected]: (state, action) => {}
    }

})
export default photosSlice.reducer