import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const allfilltext = {
    filltextone : []
}

export const getAllfillText = createAsyncThunk('filltextone,getAllfillText',()=>{
    return fetch("http://localhost:3000/one")
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
});

export const addFilltextAction = createAsyncThunk('filltextone/createFilltext',(filltext,{dispatch})=>{
    return fetch("http://localhost:3000/one",{
        method:"POST",
        body:JSON.stringify(filltext),
        headers:{
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        }
    },filltext)
    .then(()=>{
        dispatch(getAllfillText())
    })
})

export const updateFilltextAction = createAsyncThunk('filltextone/updateFilltext',(filltext,{dispatch})=>{
    return fetch("http://localhost:3000/one/"+filltext.id,{
        method:"PUT",
        body:JSON.stringify(filltext),
        headers:{
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        }
    },filltext)
    .then(()=>{
        dispatch(getAllfillText())
    })
})

export const deleteFilltextAction = createAsyncThunk('filltextone/deletefilltext',(objUrl,{dispatch})=>{
    return fetch("http://localhost:3000/one/"+objUrl.id,{
        method:"DELETE"
    },objUrl)
    .then(()=>{
        dispatch(getAllfillText())
    })
})

export const filltextSlice = createSlice({
    name : "filltextone",
    initialState : allfilltext,
    extraReducers : {
       [getAllfillText.fulfilled ] : (state,action) => {
             console.log(action.payload)
             state.filltextone = action.payload
       }
    }
})

export default filltextSlice.reducer