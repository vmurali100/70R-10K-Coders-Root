import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

 const allPhotos ={
    photos :[]
 }

export const getAllPhotos = createAsyncThunk('photos/getAllPhotos', ()=>{
    return fetch('http://localhost:3211/Photos').then((res)=> res.json()).catch((err)=>console.log(err))
 })
 
export const updatePhoto = createAsyncThunk('photos/updatePhoto', (photo,{dispatch})=>{
 return fetch('http://localhost:3211/Photos/'+photo.id,{
    method:'PUT',
    body:JSON.stringify(photo),
    headers:{
        'Accept':'application/json, plain/text, */*',
        'Content-Type':'application/json'
    }
 }).then((res)=>{
    dispatch(getAllPhotos())
 })
})

export const createPhoto = createAsyncThunk('photo/createPhoto', (photo,{dispatch})=>{
    return fetch('http://localhost:3211/Photos',{
        method:"POST",
        body:JSON.stringify(photo),
        headers:{
         'Accept':'application/json, text/plain, */*',
         'Content-Type': 'application/json'
        }
    }).then((res)=>{
        dispatch(getAllPhotos())
    })
})

export const deletePhoto = createAsyncThunk('photo/deletePhoto', (photo,{dispatch})=>{
 return fetch('http://localhost:3211/Photos/'+photo.id,{
    method:"DELETE",
    body:JSON.stringify(photo),
    headers:{
        'Accept':'application/json, text/plain, */*',
        'Content-Type':"application/json"
    }
 }).then((res)=>{
    dispatch(getAllPhotos())
 })
})

export const PhotoSlice = createSlice({
    name:"photos",
    initialState:allPhotos,
    extraReducers:{
        [getAllPhotos.fulfilled]:(state,action)=>{
            state.photos = action.payload;
            console.log(action.payload)
        }
    }
})

export default PhotoSlice.reducer;