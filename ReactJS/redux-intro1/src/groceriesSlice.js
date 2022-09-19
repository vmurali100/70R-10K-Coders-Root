import {createSlice} from '@reduxjs/toolkit';


const allGroceries = {
    items:["oil","wheat","pulses","rice"]
};
export const groceriesReducer = createSlice({

    name:"groceries",
    initialState:allGroceries,
    reducers:{
        addgrocery:(state,action)=>{
            state.items.push(action.payload);
        },
        deletegrocery:(state,action)=>{
            let filteredItems = state.items.filter((item)=>item !== action.payload)
            state.items = filteredItems;
            console.log(filteredItems)
        },
        updategrocery:(state,action)=>{},
    },
})

export default groceriesReducer.reducer;
export const {addgrocery, deletegrocery, updategrocery} = groceriesReducer.actions;