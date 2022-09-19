import React from 'react'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { addgrocery, deletegrocery } from '../groceriesSlice';

export const Groceries = () => {
    const groceries = useSelector((state)=>{return state.Groceries.items});
    const dispatch = useDispatch();
    console.log(groceries)

    const handleDelete=(item)=>{
            console.log(item);
            dispatch(deletegrocery(item));
    }

    const addItem=()=>{
      dispatch(addgrocery("cooldrink"))
    }
  return (
    <div>
      <button type="button" onClick={addItem}>Add NewItem</button>
        <ul>
            {groceries.map((item,i)=> <li key={i}>{item} - <button type='button' onClick={()=>{handleDelete(item)}}>DELETE</button></li>
                
            )}
        </ul>
    </div>
  )
}
