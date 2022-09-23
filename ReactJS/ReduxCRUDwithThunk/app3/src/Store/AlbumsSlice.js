import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { json } from 'react-router-dom';

const allAlbums = {
    Albums:[],
}

export const getAlbumsData = createAsyncThunk('Albums/getAlbumsData', ()=>{
    return fetch('http://localhost:3210/Albums',{method:"GET"}).then((res)=> res.json()).catch((err)=> console.log(err))
})

export const updateAlbm =createAsyncThunk('Album/updateAlbm', (albm,{dispatch})=>{
    return fetch('http://localhost:3210/Albums/'+albm.id,{
        method:"PUT",
        body:JSON.stringify(albm),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then((res)=>{
        dispatch(getAlbumsData())
    })
})

export const createAlbum = createAsyncThunk('Albums/createAlbum', (albm,{dispatch})=>{
    return fetch('http://localhost:3210/Albums',{
        method:"POST",
        body:JSON.stringify(albm),
        headers:{
         'Accept':'application/json, text/plain, */*',
         'Content-Type': 'application/json'
        }
    }).then((res)=>{
        dispatch(getAlbumsData())
    })
})

export const deleteAlbum =createAsyncThunk('Albums/deleteAlbum',(albm,{dispatch})=>{
    return fetch('http://localhost:3210/Albums/'+albm.id, {
        method:"DELETE",
    }).then((res)=>{
        dispatch(getAlbumsData())
    })
})
export const AlbumSlice = createSlice({
    name: "Albums",
    initialState:allAlbums,
    extraReducers:{
        [getAlbumsData.fulfilled]:(state,action)=>{
            state.Albums = action.payload
        }
    }
})

export default AlbumSlice.reducer;