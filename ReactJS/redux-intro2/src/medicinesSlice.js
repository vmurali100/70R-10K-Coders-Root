import {createSlice} from '@reduxjs/toolkit';


const allMedicines ={
    allItems:["Dolo","Vicks","Paracetemol","Voilini"],
}
const medicinesSlice = createSlice({
    name:"medicines",
    initialState:allMedicines,
    reducers:{
        addmedicine:(state,action)=>{
            state.allItems.push(action.payload);
        },
        deletemedicine:(state,action)=>{
            let filteredMedicines= state.allItems.filter((med)=> med!== action.payload)
            state.allItems= filteredMedicines;
        },
        updatemedicine:(state,action)=>{
            state.allItems[action.payload.id] = action.payload.itemName
        }
    }
})

export default medicinesSlice.reducer;
export const {addmedicine, deletemedicine, updatemedicine} = medicinesSlice.actions