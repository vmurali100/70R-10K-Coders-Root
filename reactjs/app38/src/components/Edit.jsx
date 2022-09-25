import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { updatewinAction } from '../store/winsSlice'
import { Userform } from './Userform'

export const Edit = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const wininfo = useParams()
  const [win, setwin] = useState({
    userid:"",
    id: "",
    title: "",
    completed: ""
  })
  const btnText = "update"

  const handleupdate = () => {
    dispatch(updatewinAction(win))
    navigate("/")
  }

  const handlechange = (e) => {
    let newwins = { ...win }
    newwins[e.target.name] = e.target.value
    setwin(newwins)

  }

  useEffect(() => {
    const allwins = JSON.parse(localStorage.getItem("sixth"))
    const newwin = allwins.find((mywin) => mywin.id == wininfo.id)
    setwin(newwin)
    
  }, [])
  return (
    <div>
      <Userform btnText={btnText} win={win} handleevent={handleupdate} handlechangeevent={handlechange} />
    </div>
  )
}
