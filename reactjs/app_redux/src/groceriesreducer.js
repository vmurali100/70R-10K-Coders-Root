import { createSlice } from "@reduxjs/toolkit";

const allgroceries = {
    items: ["rice", "pulses", "oil"]
};

export const groceriesreducer = createSlice({
    name: 'groceries',
    initialState: allgroceries,
    reducers: {
        addgrocery: (state, action) => {

            state.items.push(action.payload)
        },
        deletegrocery: (state, action) => {

            let filtereditems = state.items.filter((item) => item !== action.payload)
            state.items = filtereditems
        },
        updategrocery: (state, action) => {
            state.items[action.payload.id] = action.payload.itemname

            // let allitems=[...state.items]
            // allitems[action.payload.id]=action.payload.itemname
            // console.log(action.allitems)
            // state.items=allitems
        }
    }
})


export default groceriesreducer.reducer

export const { addgrocery, deletegrocery, updategrocery } = groceriesreducer.actions;