import { createSlice } from "@reduxjs/toolkit";

const allGroceries ={
items:["rice","oil","wheat","pulses"]
}
export const groceriesReducer = createSlice({
    name:'groceries',
    initialState:allGroceries,
    reducers:{
        addGrocery:(state,action)=>{
            state.items.push(action.payload)
        },
        deleteGrocery:(state,action)=>{
            console.log(action.payload);
          const filteredItems =  state.items.filter((item)=>{ return item != action.payload});
          state.items = filteredItems
           
        },
        updateGrocery:(state,action)=>{
            state.items[action.payload.id] = action.payload.itemName;
            // let allItems = [...state.items]
            // allItems[action.id] = action.itemName;
            // state.items = allItems;
        }
    }
})

export default groceriesReducer.reducer;
export const {addGrocery,deleteGrocery,updateGrocery} = groceriesReducer.actions;