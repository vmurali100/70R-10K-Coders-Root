import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const allDetails = {
    details: [],
};

export const getAllDetails = createAsyncThunk('details/getAllDetails', () => { //it brings data from api need to pass slice name and url to get data.
    return fetch("http://localhost:4003/details/").then((res) => res.json()).catch((err) => console.log(err))
})

export const createDetailAction = createAsyncThunk('details/createUser',(detail,{dispatch})=>{
    return fetch("http://localhost:4003/details/",{
        method: "POST", body:JSON.stringify(detail),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllDetails());

    })
    
})

export const updateDetailAction= createAsyncThunk('details/updateDetail',(detail, {dispatch})=>{
    return fetch("http://localhost:4003/details/"+detail.id,{
        method: "PUT", body:JSON.stringify(detail),
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(()=>{
        dispatch(getAllDetails());

    })
})

export const deleteDetailAction = createAsyncThunk('details/deleteUser',(detail, {dispatch})=>{
    console.log(detail)
    return fetch("http://localhost:4003/details/" + detail.id,{method:'DELETE'}).then((res)=>{
        console.log(dispatch)
        dispatch(getAllDetails())
        return res.json()
    }
    
    
    ).catch((err)=>console.log(err)) // it means after getting data from server we are giving call back funtn 

    
})

export const detailsSlice = createSlice({
    name: "details",
    initialState: allDetails,
    extraReducers: {
        [getAllDetails.pending]: (state, action) => {},
        [getAllDetails.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.details = action.payload
        },
        [getAllDetails.rejected]: (state, action) => {}
    }

})
export default detailsSlice.reducer