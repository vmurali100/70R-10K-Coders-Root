import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGrocery, deleteGrocery, updateGrocery } from "../GroceriesReducer";

export const Groceries = () => {
  // const groceries = useSelector((state)=> {return state.Groceries})
  const groceries = useSelector((state) => state.Groceries.items);
  const dispatch = useDispatch()

  const handleDelete=(item)=>{
    console.log(item)
    dispatch(deleteGrocery(item))
  }

  const addItem=()=>{
    dispatch(addGrocery("SoftDrinks"))
  }

  const updateItem=()=>{
    let info={
        id:1,
        itemName:"Food Items"
    }
    dispatch(updateGrocery(info))
  }
  return (
    <div>
      <p>Groceries</p>
      <button onClick={addItem}>Add</button>
      <button onClick={updateItem}>Update</button>
      <ul>
        {groceries.map((item, i) => (
          <li key={i}>
            {item} - <button onClick={()=>{handleDelete(item)}} >Delete</button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
