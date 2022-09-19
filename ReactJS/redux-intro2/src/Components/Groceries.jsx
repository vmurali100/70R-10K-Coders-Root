import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { addgrocery, deletegrocery, updategrocery } from '../grocerySlice';


export const Groceries = () => {
    const groceries= useSelector((state)=>{return state.Groceries.items});
    const dispatch = useDispatch();
    console.log(groceries);

    const addnewGroc=()=>{
        dispatch(addgrocery("Jowar"));
    }
    const deleteGroc =(groc)=>{
        dispatch(deletegrocery(groc))
    }

    const updateGroc=()=>{
        let info={
            id:2,
            itemName:"Chowmeen"
        }
        dispatch(updategrocery(info))
    }
  return (
    <div> <h3>Groceries -<button type="button" onClick={addnewGroc} >Add New</button> <button type="button" onClick={updateGroc}>Update</button> </h3>
    {groceries.map((groc,i)=> <li key={i}>{groc} - <button type="button" onClick={()=>{deleteGroc(groc)}}>Delete</button></li>)}
    </div>
  )
}
