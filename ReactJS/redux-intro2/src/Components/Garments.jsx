import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { addgarments, deletegarments, updategarments } from '../garmentsSlice';


export const Garments = () => {
const garments = useSelector((state)=>{ return state.Garments.allItems});
const dispatch =useDispatch();

const handledDelete=(gar)=>{
   dispatch(deletegarments(gar))
}

const addnew=()=>{
    dispatch(addgarments("scarf"))
}

const updateNew=()=>{
    let info={
        id:2,
        itemName:"Trousers"
    }
    dispatch(updategarments(info))
}
  return (
    <div><h2>Garments - <button type="button" onClick={addnew}>Add New</button> <button type="button" onClick={updateNew}>UpdateItem </button></h2>
        {garments.map((gar,i)=>{
            return <p key={i}>{gar} <button type="button" onClick={()=>{handledDelete(gar)}}>Delete</button></p>
        })}
    </div>
  )
}
