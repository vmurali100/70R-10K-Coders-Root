import { createSlice } from "@reduxjs/toolkit";
const allGroceries={items:["pulses","oils","Eggs","vegetables"]}
export const groceriesReducer=createSlice({//slice:functionality and logics can be written.
    name :"groceries",
    initialState:allGroceries, //declaration of grocery
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
export const{addGrocery,deleteGrocery,updateGrocery}=groceriesReducer.actions;//by using this we can call add,delete,update functionalities.