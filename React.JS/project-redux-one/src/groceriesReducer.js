import { createSlice } from "@reduxjs/toolkit";

const allGroceries = {
    items : ["Rice","Oil","Eggs","Vegetables"]
};
export const groceriesReducer = createSlice({
    name : "groceries",
    initialState : allGroceries,
    reducers : {
        addGrocery: (state,action) => {
            state.items.push(action.payload);
        },
        deleteGrocery: (state,action) =>{
            let filteredItems = state.items.filter((item) => item !== action.payload);
            state.items = filteredItems;
        },
        updateGrocery : (state,action) => {
            state.items[action.payload.id] = action.payload.itemName
        }
    }
});

export default groceriesReducer.reducer;
export const {addGrocery,deleteGrocery,updateGrocery} = groceriesReducer.actions;