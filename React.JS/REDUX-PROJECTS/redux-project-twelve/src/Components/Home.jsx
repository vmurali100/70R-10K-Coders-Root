import React from 'react'
import { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getallUsers } from '../Store/slice'

export const Home = () => {

    const allDetails = useSelector((state) => state.users)
    console.log(allDetails.users)

    localStorage.setItem("users",JSON.stringify(allDetails.users))

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        dispatch(getallUsers());
    }

    const handleEdit = (item) => {
         navigate(`/Edit/${item.id}`)
    }

    const handleDelete = (item) => {
        navigate(`/Delete/${item.id}`)

    }



    return (
        <div className="container">
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Phone</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allDetails.users.map((item, i) => {
                        return <tr key={i}>

                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td>{item.phone}</td>
                            <td>
                                <button type="button" onClick={() => handleEdit(item)} className='btn btn-warning'>EDIT</button>
                            </td>
                            <td>
                                <button type="button" onClick={() => handleDelete(item)} className='btn btn-danger'>DELETE</button>
                            </td>
                        </tr>


                    })
                    }
                </tbody>
            </table>
        </div>
    )
}
