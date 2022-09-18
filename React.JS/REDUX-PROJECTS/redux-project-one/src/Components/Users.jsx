import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { deleteUser, getAllUsers } from '../store/usersSlice';

export const Users = () => {
    const usersDetails = useSelector((state) => state.users);
    console.log(usersDetails.users);
    localStorage.setItem("users",JSON.stringify(usersDetails.users))
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const getUsers = () => {
        dispatch(getAllUsers());
    }

    useEffect(() => {
        getUsers();
    }, [])

    const handleDelete = (item) => {
        navigate(`Delete/${item.id}`)
        // dispatch(deleteUser(item))
    }

    const handleEdit = (item) => {
        navigate(`Edit/${item.id}`)
    }


    return (
        <div className='container'>
            {/* <button onClick={getUsers}>Get Users</button> */}

            <table className="table table-bordered border-primary" style={{ marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {usersDetails.users.map((item, i) => {
                        return <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>
                                <button type="button" onClick={() => {handleEdit(item)}} className='btn btn-warning'>Edit</button>
                            </td>
                            <td>
                                <button type="button" onClick={() => handleDelete(item)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>

            </table>

           

        </div>
    )
}
