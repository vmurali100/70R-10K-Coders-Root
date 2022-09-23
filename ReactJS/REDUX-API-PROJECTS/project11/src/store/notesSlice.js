import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const allNotes ={
    notes: [],
}
export const getAllNotes = createAsyncThunk('notes/getAllNotes',()=>{
    return fetch("http://localhost:4011/lists").then((res)=>res.json()).catch((err)=> console.log(err))
})

export const createNoteAction = createAsyncThunk('notes/createUser',(note,{dispatch})=>{
    return fetch("http://localhost:4011/lists/",{
        method: "POST", body:JSON.stringify(note),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllNotes());

    })
    
})

export const updateNoteAction= createAsyncThunk('notes/updateUser',(note, {dispatch})=>{
    return fetch("http://localhost:4011/lists/"+note.id,{
        method: "PUT", body:JSON.stringify(note),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllNotes());

    })
})

export const deleteNoteAction = createAsyncThunk('notes/deleteUser',(note, {dispatch})=>{
    console.log(note)
    return fetch("http://localhost:4011/lists/" + note.id,{method:'DELETE'}).then((res)=>{
        console.log(dispatch)
        dispatch(getAllNotes())
        return res.json()
    }
    
    
    ).catch((err)=>console.log(err)) // it means after getting data from server we are giving call back funtn 

    
})

export const notesSlice = createSlice({
    name:"notes",
    initialState: allNotes,
    extraReducers:{
        [getAllNotes.pending]:(state,action)=>{},
        [getAllNotes.fulfilled]:(state,action)=>{
            // console.log(action.payload)
            state.notes = action.payload
        },
        [getAllNotes.rejected]:(state,action)=>{},
        
    },
});

export default notesSlice.reducer