import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const allAlbums = {
    albums : []
}

export const getAllAlbums = createAsyncThunk('albums,getAllAlbums',()=>{
    return fetch("http://localhost:3000/albums")
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
});

export const addAlbumAction = createAsyncThunk('albums/createAlbum',(albums,{dispatch})=>{
    return fetch("http://localhost:3000/albums",{
        method:"POST",
        body:JSON.stringify(albums),
        headers:{
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        }
    },albums)
    .then(()=>{
        dispatch(getAllAlbums())
    })
})

export const updateAlbumAction = createAsyncThunk('albums/updateAlbums',(albums,{dispatch})=>{
    return fetch("http://localhost:3000/albums/"+albums.id,{
        method:"PUT",
        body:JSON.stringify(albums),
        headers:{
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        }
    },albums)
    .then(()=>{
        dispatch(getAllAlbums())
    })
})

export const deleteAlbumAction = createAsyncThunk('albums/deleteAlbum',(objUrl,{dispatch})=>{
    return fetch("http://localhost:3000/albums/"+objUrl.id,{
        method:"DELETE"
    },objUrl)
    .then(()=>{
        dispatch(getAllAlbums())
    })
})

export const albumsSlice = createSlice({
    name : "albums",
    initialState : allAlbums,
    extraReducers : {
       [getAllAlbums.fulfilled ] : (state,action) => {
             console.log(action.payload)
             state.albums = action.payload
       }
    }
})

export default albumsSlice.reducer