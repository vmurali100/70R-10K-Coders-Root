import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { getAllItems } from '../store/itemsSlice';

export const Items = () => {
   const itemsDetails =  useSelector((state)=>state.items);

   console.log(itemsDetails.items)

   
   localStorage.setItem('items',JSON.stringify(itemsDetails.items))
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const getitems=()=>{
    dispatch(getAllItems());
   }
   
   useEffect(()=>{
        getitems()
   },[])
   const handleDelete = (item) => {
    navigate(`delete/${item.id}`)
    // dispatch(deleteUser(item))
}

const handleEdit = (item) => {
    navigate(`edit/${item.id}`)
}
  return (
    <div className='container'>

        {/* <button onClick={getitems} className= 'btn btn-primary'>Get item</button> */}

        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th >ID</th>
                    <th >UserId</th>
                    <th >Title</th>
                    <th>Body</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {itemsDetails.items.map((item, i) => (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.userid}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                        <td><button className='btn btn-warning' onClick={() => { handleEdit(item) }}>Edit</button></td>
                        <td><button className='btn btn-danger' onClick={() => { handleDelete(item) }}>Delete</button></td>
                    </tr>))}
            </tbody>
        </table>
        
    </div>
  )
}
