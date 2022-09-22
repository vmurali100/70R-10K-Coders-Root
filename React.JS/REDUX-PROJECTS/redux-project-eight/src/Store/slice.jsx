import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const allfilltext = {
    filltexttwo : []
}

export const getAllfillText = createAsyncThunk('filltexttwo,getAllfillText',()=>{
    return fetch("http://localhost:3000/one")
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
});

export const addFilltextAction = createAsyncThunk('filltexttwo/createFilltext',(filltext,{dispatch})=>{
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

export const updateFilltextAction = createAsyncThunk('filltexttwo/updateFilltext',(filltext,{dispatch})=>{
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

export const deleteFilltextAction = createAsyncThunk('filltexttwo/deletefilltext',(objUrl,{dispatch})=>{
    return fetch("http://localhost:3000/one/"+objUrl.id,{
        method:"DELETE"
    },objUrl)
    .then(()=>{
        dispatch(getAllfillText())
    })
})

export const filltextSlice = createSlice({
    name : "filltexttwo",
    initialState : allfilltext,
    extraReducers : {
       [getAllfillText.fulfilled ] : (state,action) => {
             console.log(action.payload)
             state.filltexttwo = action.payload
       }
    }
})

export default filltextSlice.reducer