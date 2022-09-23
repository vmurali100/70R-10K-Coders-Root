import React,{useState} from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editUserAction } from '../Store/slice'
import { Form } from './Form'

export const Edit = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const objUrl = useParams()

    const btnText = "UPDATE USER"


    const [user, setuser] = useState({})

    useEffect(()=>{
        const info = JSON.parse(localStorage.getItem("users"));
        const result = info.find((item) => item.id == objUrl.id)
        setuser(result)
    },[])

    const handleChange = e => {
         let newUser = {...user}
         newUser[e.target.name] = [e.target.value]
         setuser(newUser
            )
    }

    const editUser=()=>{
        dispatch(editUserAction(user))
        navigate("/")
    }
  return (
    <Form btnText={btnText} user={user} handleEvent={editUser} handleChangeEvent={handleChange} />
  )
}
