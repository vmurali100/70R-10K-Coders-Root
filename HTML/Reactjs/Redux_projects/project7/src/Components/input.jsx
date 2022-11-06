import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { getAllInputs } from '../store/inputsSlice';

export const Inputs = () => {
   const inputsDetails =  useSelector((state)=>state.inputs);

   console.log(inputsDetails.inputs)

   
   localStorage.setItem('inputs',JSON.stringify(inputsDetails.inputs))
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const getstudents=()=>{
    dispatch(getAllInputs());
   }
   
   useEffect(()=>{
        getstudents()
   },[])
   const handleDelete = (Input) => {
    navigate(`delete/${Input.id}`)
    // dispatch(deleteUser(Input))
}

const handleEdit = (Input) => {
    navigate(`edit/${Input.id}`)
}
  return (
    <div className='container'>

        {/* <button onClick={getstudents} className= 'btn btn-primary'>Get Input</button> */}

        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th >ID</th>
                    <th >Fname</th>
                    <th >Lname</th>
                    <th>DofB</th>
                    <th>EmailId</th>
                    <th>Mobilenumber</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {inputsDetails.inputs.map((Input, i) => (
                    <tr key={i}>
                        <td>{Input.id}</td>
                        <td>{Input.fname}</td>
                        <td>{Input.lname}</td>
                        <td>{Input.dofb}</td>
                        <td>{Input.emailid}</td>
                        <td>{Input.mobilenumber}</td>
                        <td><button className='btn btn-warning' onClick={() => { handleEdit(Input) }}>Edit</button></td>
                        <td><button className='btn btn-danger' onClick={() => { handleDelete(Input) }}>Delete</button></td>
                    </tr>))}
            </tbody>
        </table>
        
    </div>
  )
}