import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { getAllEvents } from '../store/eventsSlice';

export const Events = () => {
   const eventsDetails =  useSelector((state)=>state.events);

   console.log(eventsDetails.events)

   
   localStorage.setItem('events',JSON.stringify(eventsDetails.events))
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const getevents=()=>{
    dispatch(getAllEvents());
   }
   
   useEffect(()=>{
        getevents()
   },[])
   const handleDelete = (event) => {
    navigate(`delete/${event.id}`)
    // dispatch(deleteUser(event))
}

const handleEdit = (event) => {
    navigate(`edit/${event.id}`)
}
  return (
    <div className='container'>

        {/* <button onClick={getevents} className= 'btn btn-primary'>Get event</button> */}

        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th >ID</th>
                    <th >Name</th>
                    <th >Email</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>ConfirmPassword</th>
                    <th>Message</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {eventsDetails.events.map((event, i) => (
                    <tr key={i}>
                        <td>{event.id}</td>
                        <td>{event.name}</td>
                        <td>{event.email}</td>
                        <td>{event.username}</td>
                        <td>{event.password}</td>
                        <td>{event.confirmpassword}</td>
                        <td>{event.message}</td>
                        <td><button className='btn btn-warning' onClick={() => { handleEdit(event) }}>Edit</button></td>
                        <td><button className='btn btn-danger' onClick={() => { handleDelete(event) }}>Delete</button></td>
                    </tr>))}
            </tbody>
        </table>
        
    </div>
  )
}
