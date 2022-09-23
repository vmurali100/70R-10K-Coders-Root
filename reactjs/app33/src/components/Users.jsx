import React from 'react'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getallusers } from '../store/usersSlice'
import {useNavigate} from 'react-router-dom'

export const Users = () => {

  const dispatch = useDispatch()
  const getusers = () => {
      dispatch(getallusers())
  }

const navigate=useNavigate()

  const usersdetails = useSelector((state) => state.users)
  console.log(usersdetails.users)

  localStorage.setItem('folks', JSON.stringify(usersdetails.users))
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
            <th >FNAME</th>
            <th >LNAME</th>
            <th >TEL</th>
            <th>ADDRESS</th>
            <th>CITY</th>
            <th>STATE</th>
            <th>ZIP</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {usersdetails.users.map((user, i) =>
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.tel}</td>
              <td>{user.address}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>{user.zip}</td>
              <td> <button type='button' className='btn btn-warning' onClick={() => { handleedit(user) }}>EDIT</button> </td>
              <td>  <button type='button' className='btn btn-danger' onClick={() => { handledelete(user) }}>DELETE</button> </td>
            </tr>)}
        </tbody>
      </table>

    </div>
  )
}
