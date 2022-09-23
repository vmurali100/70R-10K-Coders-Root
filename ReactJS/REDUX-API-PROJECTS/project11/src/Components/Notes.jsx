import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { getAllNotes } from '../store/notesSlice';

export const Notes = () => {
   const notesDetails =  useSelector((state)=>state.notes);

   console.log(notesDetails.notes)

   
   localStorage.setItem('notes',JSON.stringify(notesDetails.notes))
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const getnotes=()=>{
    dispatch(getAllNotes());
   }
   
   useEffect(()=>{
        getnotes()
   },[])
   const handleDelete = (note) => {
    navigate(`delete/${note.id}`)
    // dispatch(deleteUser(note))
}

const handleEdit = (note) => {
    navigate(`edit/${note.id}`)
}
  return (
    <div className='container'>

        {/* <button onClick={getnotes} className= 'btn btn-primary'>Get note</button> */}

        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th >ID</th>
                    <th >Street</th>
                    <th >City</th>
                    <th>State</th>
                    <th>Zipcode</th>
                    <th>Country</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {notesDetails.notes.map((note, i) => (
                    <tr key={i}>
                        <td>{note.id}</td>
                        <td>{note.street}</td>
                        <td>{note.city}</td>
                        <td>{note.state}</td>
                        <td>{note.zipcode}</td>
                        <td>{note.country}</td>

                        <td><button className='btn btn-warning' onClick={() => { handleEdit(note) }}>Edit</button></td>
                        <td><button className='btn btn-danger' onClick={() => { handleDelete(note) }}>Delete</button></td>
                    </tr>))}
            </tbody>
        </table>
        
    </div>
  )
}
