import React,{useState} from 'react'
import {useEffect} from 'react'
import { Userform } from './Userform'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateuserAction } from '../store/usersSlice'

export const Edit = () => {

  const btntext = "update"

  const userinfo = useParams()
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


  const handleupdate = () => {
      dispatch(updateuserAction(user))
      navigate("/")
  }

  const handlechange = (e) => {
      let newuser = { ...user }
      newuser[e.target.name] = e.target.value
      setuser(newuser)

  }

  useEffect(() => {
      const allusers = JSON.parse(localStorage.getItem("folks"))
      const newuser = allusers.find((myuser) => myuser.id == userinfo.id);
      setuser(newuser)
  }, [])
  return (
    <div className="container">
    <Userform btntext={btntext} user={user} handleevent={handleupdate} handlechangeevent={handlechange} />
</div>
  )
}
