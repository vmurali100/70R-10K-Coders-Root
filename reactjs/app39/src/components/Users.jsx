import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteuser, getallusers } from '../store/usersSlice';
import {useNavigate} from 'react-router-dom'

export const Users = () => {


    const dispatch = useDispatch()
    const getusers = () => {
        dispatch(getallusers())
    }

 const navigate=useNavigate()

    const usersdetails = useSelector((state) => state.users)
    console.log(usersdetails.users);

    localStorage.setItem('eight',JSON.stringify(usersdetails.users))
    useEffect(() => {
        getusers()
    }, [])

    const handledelete = (user) => {
        navigate(`delete/${user.id}`)
    }

    const handleedit = (user) => {
        navigate(`edit/${user.id}`)
    }

    return (
        <div className='container'>
            {/* <button onClick={getusers} type='button' classNameName='btn btn-primary' >Get users</button> */}
            <table className="table">
                <thead>
                    <tr>
                        <th >ID</th>
                        <th >EMAIL</th>
                        <th >USERNAME</th>
                        <th >PASSWORD</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {usersdetails.users.map((user, i) =>
                        <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td> <button type='button' className='btn btn-warning' onClick={() => { handleedit(user) }}>EDIT</button> </td>
                            <td>  <button type='button' className='btn btn-danger' onClick={() => { handledelete(user) }}>DELETE</button> </td>
                        </tr>)}
                </tbody>
            </table>

        </div>
    )
}
