import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createuserAction } from '../store/usersSlice'
import { Userform } from './Userform'
import { useNavigate } from 'react-router-dom'

export const Create = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setuser] = useState({
    id: "",
    fname: "",
    lname: "",
    tel: "",
    address: "",
    city: "",
    state: "",
    zip: ""

  })




  const btntext = "Adduser"


  const handlecreate = () => {
    dispatch(createuserAction(user))
    navigate("/")
  }

  const handlechange = (e) => {
    let newuser = { ...user }
    newuser[e.target.name] = e.target.value
    setuser(newuser)

  }
  return (
    <div>
      <div className="container">
        <Userform btntext={btntext} user={user} handleevent={handlecreate} handlechangeevent={handlechange} />
      </div>
    </div>
  )
}
