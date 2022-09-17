import { createSlice } from "@reduxjs/toolkit";


const allGroceries = {
    items: ["Rice", "Oils", "Eggs", "Vegetables"]
}
export const GroceriesReducer = createSlice({
    name: "Groceries",
    initialState: allGroceries,
    reducers: {
        addGrocery: (state, action) => {
            state.items.push(action.payload)
        },
        deleteGrocery: (state, action) => {
            // console.log(state)
            // console.log(action.payload)
            // state.filter((item)=> item !== action.payload)
            // console.log(state.items.filter((item) => item !== action.payload))
            let filtereditems = state.items.filter((item) => item !== action.payload)
            state.items = filtereditems
        },
        updateGrocery: (state, action) => {
            // console.log(action.payload)
            // let allItems = [...state.items]
            // allItems[action.payload.id]=action.payload.itemName
            // state.items=allItems
            state.items[action.payload.id]=action.payload.itemName
        }
    }
})

export default GroceriesReducer.reducer

export const { addGrocery, deleteGrocery, updateGrocery } = GroceriesReducer.actions