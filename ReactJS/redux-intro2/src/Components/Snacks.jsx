import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { addsnack, deletesnack, updatesnack } from '../snacksSlice';

export const Snacks = () => {
 const snacks = useSelector((state)=> state.Snacks.allItems);
 const dispatch =useDispatch();

 const handleDelete=(snck)=>{
  dispatch(deletesnack(snck))
 }

 const addnew=()=>{
    dispatch(addsnack("Kurkure"));
 }


 const updatesnck=()=>{
    let info= {
        id:1,
        itemName:"karachi"
    }
    dispatch(updatesnack(info))
 }
  return (
    <div><h3>Snacks - <button type="button" onClick={addnew}>Add New</button> <button type="button" onClick={updatesnck}>Update Item</button></h3>
    {snacks.map((snck,i)=>{return <li key={i}>{snck} - <button type="button" onClick={()=>{handleDelete(snck)}}>Delete</button></li>})}
    </div>
  )
}
