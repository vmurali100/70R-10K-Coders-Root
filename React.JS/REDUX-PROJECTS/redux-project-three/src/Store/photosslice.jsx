import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const allPhotos = {
    photos : []
};

export const getAllPhotos = createAsyncThunk('photos/getAllPhotos',()=>{
    return fetch("http://localhost:3000/photos")
    .then((res)=> res.json())
    .catch((err)=> console.log(err))
});

export const createPhotoAction = createAsyncThunk('photos/createPhoto',(photo,{dispatch})=>{
    return fetch("http://localhost:3000/photos",{
        method:"POST",
        body : JSON.stringify(photo),
        headers : {
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        }
    },photo)
    .then(()=>{
        dispatch(getAllPhotos())
    })
})



export const deletePhotoAction = createAsyncThunk('photos/deletePhoto',(objUrl,{dispatch})=>{
    return fetch("http://localhost:3000/photos/"+objUrl.id,
    {method  : "DELETE"})
    .then(()=>{
        dispatch(getAllPhotos());
    })
});

export const updatePhotoAction = createAsyncThunk('photos/updatePhoto',(photo,{dispatch})=>{
    return fetch("http://localhost:3000/photos/"+photo.id,{
        method:"PUT",
        body: JSON.stringify(photo),
        headers:{
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        }
    },photo).then(()=>{
        dispatch(getAllPhotos())
    })
})

export const photoSlice = createSlice({
    name : "photos",
    initialState : allPhotos,
    extraReducers : {
        [getAllPhotos.pending] : () => {},
        [getAllPhotos.fulfilled] : (state,action) => {
            console.log(action.payload);
            state.photos = action.payload
        }
    }
});

export default photoSlice.reducer