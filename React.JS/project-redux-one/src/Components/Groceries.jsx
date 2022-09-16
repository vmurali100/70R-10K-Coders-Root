import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGrocery, deleteGrocery, updateGrocery } from '../groceriesReducer';

export const Groceries = () => {
    const groceries = useSelector((state) => {
        return state.Groceries
     
    });

    console.log(groceries)

    const dispatch = useDispatch();

    const handleDelete = (item) => {
        console.log(item);
        dispatch(deleteGrocery(item))
    };

    const addItem = () => {
        dispatch(addGrocery("CoolDrinks"))
    };

    const updateItem = () => {
        let info = { id: 1, itemName: "Food Items" }
        dispatch(updateGrocery(info))
    };

    return (
        <div>
            <button onClick={addItem}>Add  Item</button>
            <button onClick={updateItem}>Update Item</button>
            <ul>
                {groceries.items.map((item, i) =>
                    <li key={i}> {item} -- <button onClick={() => { handleDelete(item) }}>Delete</button></li>
                )}
            </ul>
        </div>
    )
}
