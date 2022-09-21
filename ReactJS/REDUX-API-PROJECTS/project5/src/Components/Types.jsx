import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { getAllTypes } from '../store/typesSlice';

export const Types = () => {
   const typesDetails =  useSelector((state)=>state.types);

   console.log(typesDetails.types)

   
   localStorage.setItem('types',JSON.stringify(typesDetails.types))
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const gettypes=()=>{
    dispatch(getAllTypes());
   }
   
   useEffect(()=>{
        gettypes()
   },[])
   const handleDelete = (type) => {
    navigate(`delete/${type.id}`)
    // dispatch(deleteUser(type))
}

const handleEdit = (type) => {
    navigate(`edit/${type.id}`)
}
  return (
    <div className='container'>

        {/* <button onClick={gettypes} className= 'btn btn-primary'>Get type</button> */}

        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th >ID</th>
                    <th >Title</th>
                    <th >Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {typesDetails.types.map((type, i) => (
                    <tr key={i}>
                        <td>{type.id}</td>
                        <td>{type.title}</td>
                        <td>{type.price}</td>
                        <td>{type.description}</td>
                        <td>{type.category}</td>

                        <td><button className='btn btn-warning' onClick={() => { handleEdit(type) }}>Edit</button></td>
                        <td><button className='btn btn-danger' onClick={() => { handleDelete(type) }}>Delete</button></td>
                    </tr>))}
            </tbody>
        </table>
        
    </div>
  )
}
