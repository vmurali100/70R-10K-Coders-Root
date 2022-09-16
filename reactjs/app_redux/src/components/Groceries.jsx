import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addgrocery, deletegrocery, updategrocery } from '../groceriesreducer'

export const Groceries = () => {
  // const groceries = useSelector((state) => { return state.Groceries })
  const groceries = useSelector((state) => state.Groceries.items)
  console.log(groceries)


  const dispatch = useDispatch()


  const handledelete = (item) => {
    console.log(item)
    dispatch(deletegrocery(item))
  }

  const additem = () => {
    dispatch(addgrocery("cool drinks"))
  }

  const updateitem = () => {
    let info = {
      id: 1,
      itemname: "flour"
    }
    dispatch(updategrocery(info))
  }
  return (
    <div>Groceries

      <button onClick={additem}>add</button>

      <button onClick={updateitem}>update</button>

      <ul>{groceries.map((item, i) => <li key={i}>{item} <button onClick={() => { handledelete(item) }}>DEL</button> </li>)}</ul>
    </div>
  )

}