import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addGrocery, deleteGrocery,updateGrocery } from '../groceriesSlice'
export const Groceries = () => {
    //const groceries=useSelector((state)=>{return state.Groceries})
const groceries=useSelector((state)=>state.Groceries.items)
const dispatch=useDispatch()

const handleDelete=(item)=>{
console.log(item)
dispatch(deleteGrocery(item))
}
  const addItem =()=>{
    dispatch (addGrocery("Cool Drinks"))
  } 
  const updateItem =()=>{
    let info={
        id:1,
        itemName:"pulses"
    }
dispatch(updateGrocery(info))
  }
  return (
    <div>Groceries
        <button onClick={addItem}>Add</button>
        <button onClick={updateItem}>Update</button>
        <ul>
            {groceries.map((item,i)=> <li key={i}>{item} - <button onClick={()=>handleDelete(item)}>Delete</button></li>)}
        </ul>
    </div>
  )
}
