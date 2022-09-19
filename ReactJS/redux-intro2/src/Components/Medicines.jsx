import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { addmedicine, deletemedicine, updatemedicine } from '../medicinesSlice';


export const Medicines = () => {
   const medicines = useSelector((state)=>{ return state.Medicines.allItems});
   const dispatch =useDispatch();

   const handleDelete=(med)=>{
 dispatch(deletemedicine(med))
   }

   const addMedicine=(med1)=>{
    dispatch(addmedicine("syrup"))
   }

   const updateMed=()=>{
    let info ={
        id:0,
        itemName:"Zerodol"
    }
    dispatch(updatemedicine(info))
   }
  return (
    <div>Medicines - <button type="button" onClick={addMedicine}>Add New</button> <button type="button" onClick={updateMed}>Update Item</button>
        <ul>
            {medicines.map((med,i)=> <li key={i}>{med} <button type="button" onClick={()=>{handleDelete(med)}}>Delete</button></li>)}
        </ul>
    </div>
  )
}
