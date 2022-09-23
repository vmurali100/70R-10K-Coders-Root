import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const allEvents ={
    events: [],
}
export const getAllEvents = createAsyncThunk('events/getAllEvents',()=>{
    return fetch("http://localhost:4012/validations").then((res)=>res.json()).catch((err)=> console.log(err))
})

export const createEventAction = createAsyncThunk('events/createUser',(event,{dispatch})=>{
    return fetch("http://localhost:4012/validations/",{
        method: "POST", body:JSON.stringify(event),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllEvents());

    })
    
})

export const updateEventAction= createAsyncThunk('events/updateUser',(event, {dispatch})=>{
    return fetch("http://localhost:4012/validations/"+event.id,{
        method: "PUT", body:JSON.stringify(event),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllEvents());

    })
})

export const deleteEventAction = createAsyncThunk('events/deleteUser',(event, {dispatch})=>{
    console.log(event)
    return fetch("http://localhost:4012/validations/" + event.id,{method:'DELETE'}).then((res)=>{
        console.log(dispatch)
        dispatch(getAllEvents())
        return res.json()
    }
    
    
    ).catch((err)=>console.log(err)) // it means after getting data from server we are giving call back funtn 

    
})

export const eventsSlice = createSlice({
    name:"events",
    initialState: allEvents,
    extraReducers:{
        [getAllEvents.pending]:(state,action)=>{},
        [getAllEvents.fulfilled]:(state,action)=>{
            // console.log(action.payload)
            state.events = action.payload
        },
        [getAllEvents.rejected]:(state,action)=>{},
        
    },
});

export default eventsSlice.reducer