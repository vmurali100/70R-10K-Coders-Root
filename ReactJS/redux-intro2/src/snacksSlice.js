import {createSlice} from '@reduxjs/toolkit';

const allSnacks ={
    allItems:["choco","biscuit","toffee","lays"]
}

const snacksSlice =createSlice({
    name:"snacks",
    initialState:allSnacks,
    reducers:{
        addsnack:(state,action)=>{
            state.allItems.push(action.payload)
        },
        deletesnack:(state,action)=>{
      let filtered = state.allItems.filter((snck)=> snck !== action.payload);
            state.allItems = filtered
        },
        updatesnack:(state,action)=>{
          state.allItems[action.payload.id] =  action.payload.itemName;
           
        },
    }
}) 

export default snacksSlice.reducer;
export const {addsnack, deletesnack, updatesnack } = snacksSlice.actions;