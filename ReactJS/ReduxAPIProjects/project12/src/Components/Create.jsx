
  import React,{useState} from 'react'
  import { useDispatch } from 'react-redux';
  import { createCalenderAction } from '../store/calendersSlice';
  import { useNavigate } from "react-router-dom";
  import { UserForm } from './UserForm'

  
  
  export const Create = () => {
      const btnText ="Add Calender";
      const [calender, setcalender] = useState({"id":"" ,
      "username": "",
      "password": "",
      "emailaddress": "",
      "dateofbirth": "",
      "height": "",
      "weight": "",
    })
      const dispatch=useDispatch();
      const navigate=useNavigate()
      const handleCreate=()=>{
          dispatch(createCalenderAction(calender))
          navigate("/")
  
          
      }
      const handleChange=(e)=>{//for giving inputs
          let newCalenders={...calender}
          newCalenders[e.target.name]=e.target.value
          setcalender(newCalenders)
  
      }
  
    return (    
      <div className="container">
          <UserForm btnText={btnText} calender={calender} handleEvent={handleCreate} handleChangeEvent={handleChange}/>
          
  </div>
  
    )}
  
  
    