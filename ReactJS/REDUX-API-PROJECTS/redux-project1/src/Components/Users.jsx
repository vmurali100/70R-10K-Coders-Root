import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUsers } from '../store/usersSlice';

export const Users = () => {

    const usersDetails = useSelector((state) => state.users); // to define state we are using useselector

    console.log(usersDetails.users); //to get an array we have written this

    const dispatch = useDispatch()
    const getusers = () => {
        dispatch(getAllUsers())
    }

    useEffect(()=>{

        getusers()
    },[])

    const handleDelete=(user)=>{
        dispatch(deleteUser(user))
    }

    return <div>
        {/* <button onClick={getusers} className= 'btn btn-primary'>Get User</button> */}

        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th >ID</th>
                    <th >Email</th>
                    <th >Username</th>
                    <th >Password</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {usersDetails.users.map((user,i) => (
                    <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td><button className='btn btn-warning'>Edit</button></td>
                        <td><button className='btn btn-danger' onClick={()=>{handleDelete(user)}}>Delete</button></td>
                    </tr>))}
            </tbody>
        </table>

    </div>;

};

