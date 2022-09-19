import {createSlice}from '@reduxjs/toolkit';

const allGrocery ={
    items :["Rice","wheat","pulses","sugar"]
}
const grocerySlice = createSlice({
    name:"Grocery",
    initialState:allGrocery,
    reducers :{
        addgrocery:(state,action)=>{
            state.items.push(action.payload)
        },
        deletegrocery:(state,action)=>{
            let filteredGrocery = state.items.filter((groc)=> groc !== action.payload);
            state.items = filteredGrocery
        },
        updategrocery:(state,action)=>{
            state.items[action.payload.id] = action.payload.itemName;
        }
    }
})

export default grocerySlice.reducer;
export const {addgrocery, deletegrocery,updategrocery} = grocerySlice.actions;