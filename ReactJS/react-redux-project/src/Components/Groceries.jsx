import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addGrocery, deleteGrocery, updateGrocery } from '../groceriesSlice';

export const Groceries = () => {
  const groceries =  useSelector((state)=> state.Groceries);
  console.log(groceries)
  const dispatch = useDispatch();
  const handleDelete=(item)=>{
    dispatch(deleteGrocery(item))
  }

  const addItem =()=>{
    dispatch(addGrocery("Veggies"))
  }

  const updateItem=()=>{
    let info={
        id:1,
        itemName:"Dal"
    }
    dispatch(updateGrocery(info))
  }
  return (
    <div>Groceries
        <button type="button" onClick={addItem}>AddItem</button>
        <button type="button" onClick={updateItem}>Update</button>
        <ul>
            {groceries.items.map((item,i)=> <li key={i}>{item}- <button type="button" onClick={()=>{handleDelete(item)}}>Delete</button> </li> )}
        </ul>
    </div>
  )
}
