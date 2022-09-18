import { createSlice } from "@reduxjs/toolkit";

const allGroceries={items:["pulses","oils","Eggs","Bread"]}

export const groceriesReducer = createSlice({
  //slice is function which contains name of the slice, intitatial data, actions, we are exporting reducer from slice
    
    name :"groceries",
    initialState:allGroceries, 
    reducers:{
          addGrocery:(state,action)=>{//by default when we are creating it takes state;action:add,update,delete;state:declaration.
            state.items.push(action.payload)
          },
          deleteGrocery:(state,action)=>{//1:action will take allgrocerries then 2:action will take wht we are sending in add user.
            // console.log(action.payload)
          let filtereditems = state.items.filter((item)=>item  !== action.payload);
          state.items= filtereditems
           
          },
          
          updateGrocery:(state,action)=>{
            // let allItems=[...state.items]
            // allItems[action.payload.id] =action.payload.itemName;
            // console.log(allItems)
            // state.items=allItems
            state.items[action.payload.id]=action.payload.itemName

          }
    }
})
export default groceriesReducer.reducer
export const{addGrocery,deleteGrocery,updateGrocery}=groceriesReducer.actions;

// created a function, given category name, default application means Intitial state is given line 6
// line number 8,9,10 is called to be actions
//declaration of grocery 
