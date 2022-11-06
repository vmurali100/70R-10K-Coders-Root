import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const allAlbums ={
    albums: [],
}
export const getAllAlbums = createAsyncThunk('albums/getAllAlbums',()=>{
    return fetch("http://localhost:4010/albums").then((res)=>res.json()).catch((err)=> console.log(err))
})

export const createAlbumAction = createAsyncThunk('albums/createUser',(album,{dispatch})=>{
    return fetch("http://localhost:4010/albums/",{
        method: "POST", body:JSON.stringify(album),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllAlbums());

    })
    
})

export const updateAlbumAction= createAsyncThunk('albums/updateUser',(album, {dispatch})=>{
    return fetch("http://localhost:4010/albums/"+album.id,{
        method: "PUT", body:JSON.stringify(album),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllAlbums());

    })
})

export const deleteAlbumAction = createAsyncThunk('albums/deleteUser',(album, {dispatch})=>{
    console.log(album)
    return fetch("http://localhost:4010/albums/" + album.id,{method:'DELETE'}).then((res)=>{
        console.log(dispatch)
        dispatch(getAllAlbums())
        return res.json()
    }
    
    
    ).catch((err)=>console.log(err)) // it means after getting data from server we are giving call back funtn 

    
})

export const albumsSlice = createSlice({
    name:"albums",
    initialState: allAlbums,
    extraReducers:{
        [getAllAlbums.pending]:(state,action)=>{},
        [getAllAlbums.fulfilled]:(state,action)=>{
            // console.log(action.payload)
            state.albums = action.payload
        },
        [getAllAlbums.rejected]:(state,action)=>{},
        
    },
});

export default albumsSlice.reducer