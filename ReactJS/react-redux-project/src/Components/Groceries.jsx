

import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addGrocery, deleteGrocery, updateGrocery } from '../groceriesSlice'


export const Groceries = () => {
   //const groceries= useSelector((state)=>{//useSelector it will used to get selected items
    //  return state.Groceries
    // })
    const groceries= useSelector((state)=> state.Groceries.items) //{return}
     const dispatch=  useDispatch()//acts as gun we cannot direct call we need to dispatch the action.

    console.log(groceries)
     const handleDelete=(item)=>{
     console.log(item)
     dispatch(deleteGrocery(item))
   }
   const addItem =()=>{
    dispatch(addGrocery("Grains"))
   }
   const updateItem =()=>{
    let data = {
        id :1,
        itemName:"Washing Powder"
    }
    dispatch(updateGrocery(data))
   }

  return (
    <div>Groceries
        <button onClick={addItem}>Add</button>
        <button onClick={updateItem}> Update</button>
        <ul>
            {groceries.map((item,i)=>
            <li key={i}>{item}-<button onClick={()=>{handleDelete(item)}}>Delete</button></li>
            )}
        </ul>
    </div>

  )
}