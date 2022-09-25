import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deletewinAction, getallwins } from '../store/winsSlice'

export const Wins = () => {

    const winsdetails = useSelector((state) => state.wins)
    console.log(winsdetails.wins)


    localStorage.setItem('NINE',JSON.stringify(winsdetails.wins))
    const dispatch = useDispatch()

    const navigate=useNavigate()

    const getwins = () => {
        dispatch(getallwins())
    }

    useEffect(() => {
        getwins()
    }, [])

    const handledelete = (user) => {
        navigate(`delete/${user.id}`)
    }

    const handleedit = (user) => {
        navigate(`edit/${user.id}`)
    }
    return (
        <div>
            {/* <button type='button' onClick={getwins}>GETWIN</button> */}

            <table className="table">
                <thead>
                    <tr>
                        <th >ID</th>
                        <th >FNAME</th>
                        <th >LNAME</th>
                        <th>EDIT</th>
                        <th>DELETE</th>

                    </tr>
                </thead>
                <tbody>
                    {winsdetails.wins.map((user, i) =>
                        <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td> <button type='button' className='btn btn-warning' onClick={() =>{handleedit(user)}}>EDIT</button> </td>
                            <td> <button type='button' className='btn btn-danger' onClick={() => { handledelete(user) }}>DELETE</button> </td>
                        </tr>)}
                </tbody>
            </table>

           
        </div>
    )
}
