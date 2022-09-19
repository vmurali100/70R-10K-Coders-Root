import {createSlice} from '@reduxjs/toolkit';


const allGarments ={
    allItems:["shirt","pant","t-shirt","jeans"]
}
const garmentsSlice = createSlice({
    name:"garments",
    initialState:allGarments,
    reducers:{
        addgarments:(state,action)=>{
            state.allItems.push(action.payload)
        },
        deletegarments:(state,action)=>{
            let filteredGarments = state.allItems.filter((gar)=> gar !== action.payload);
            state.allItems = filteredGarments
        },
        updategarments:(state,action)=>{
            state.allItems[action.payload.id] = action.payload.itemName;
        },
    }
})

export default garmentsSlice.reducer;
export const {addgarments, deletegarments, updategarments} = garmentsSlice.actions;