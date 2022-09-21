import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const allAlbums = {
    albums: [],
};
export const getAllAlbums = createAsyncThunk('albums/getAllAlbums', () => { //it brings data from api need to pass slice name and url to get data.
    return fetch("http://localhost:5004/albums/").then((res) => res.json()).catch((err) => console.log(err))
})

export const createAlbumAction = createAsyncThunk('albums/createAlbums', (album, { dispatch }) => {
    return fetch("http://localhost:5004/albums/", {
        method: 'POST',
        body: JSON.stringify(album),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllAlbums())
    })
})
export const deleteAlbumAction = createAsyncThunk('albums/deleteAlbums', (album, { dispatch }) => {
    return fetch("http://localhost:5004/albums/" + album.id, {
        method: 'DELETE',
        body: JSON.stringify(album),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllAlbums())
    })
})

export const updateAlbumAction = createAsyncThunk('albums/updateAlbums', (album, { dispatch }) => {


    return fetch("http://localhost:5004/albums/" + album.id, {
        method: 'PUT',
        body: JSON.stringify(album),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        dispatch(getAllAlbums())
    })
})


export const albumsSlice = createSlice({
    name: "albums",
    initialState: allAlbums,
    extraReducers: {
        [getAllAlbums.pending]: (state, action) => {},
        [getAllAlbums.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.albums = action.payload
        },
        [getAllAlbums.rejected]: (state, action) => {}
    }

})
export default albumsSlice.reducer