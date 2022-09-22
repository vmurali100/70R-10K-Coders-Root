import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const allPhotos ={
    photos: [],
}
export const getAllPhotos = createAsyncThunk('photos/getAllPhotos',()=>{
    return fetch("http://localhost:4008/photos").then((res)=>res.json()).catch((err)=> console.log(err))
})

export const createPhotoAction = createAsyncThunk('photos/createUser',(photo,{dispatch})=>{
    return fetch("http://localhost:4008/photos/",{
        method: "POST", body:JSON.stringify(photo),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllPhotos());

    })
    
})

export const updatePhotoAction= createAsyncThunk('photos/updateUser',(photo, {dispatch})=>{
    return fetch("http://localhost:4008/photos/"+photo.id,{
        method: "PUT", body:JSON.stringify(photo),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllPhotos());

    })
})

export const deletePhotoAction = createAsyncThunk('photos/deleteUser',(photo, {dispatch})=>{
    console.log(photo)
    return fetch("http://localhost:4008/photos/" + photo.id,{method:'DELETE'}).then((res)=>{
        console.log(dispatch)
        dispatch(getAllPhotos())
        return res.json()
    }
    
    
    ).catch((err)=>console.log(err)) // it means after getting data from server we are giving call back funtn 

    
})

export const photosSlice = createSlice({
    name:"photos",
    initialState: allPhotos,
    extraReducers:{
        [getAllPhotos.pending]:(state,action)=>{},
        [getAllPhotos.fulfilled]:(state,action)=>{
            // console.log(action.payload)
            state.photos = action.payload
        },
        [getAllPhotos.rejected]:(state,action)=>{},
        
    },
});

export default photosSlice.reducer