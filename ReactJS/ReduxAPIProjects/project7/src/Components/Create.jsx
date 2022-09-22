
  import React,{useState} from 'react'
  import { useDispatch } from 'react-redux';
  import { createDetailAction } from '../store/detailsSlice';
  import { useNavigate } from "react-router-dom";
  import { UserForm } from './UserForm'

  
  
  export const Create = () => {
      const btnText ="Add Detail";
      const [detail, setdetail] = useState({id:"",fname:"",lname:""})
      const dispatch=useDispatch();
      const navigate=useNavigate()
      const handleCreate=()=>{
          dispatch(createDetailAction(detail))
          navigate("/")
  
          
      }
      const handleChange=(e)=>{//for giving inputs
          let newDetails={...detail}
          newDetails[e.target.name]=e.target.value
          setdetail(newDetails)
  
      }
  
    return (    
      <div className="container">
          <UserForm btnText={btnText} detail={detail} handleEvent={handleCreate} handleChangeEvent={handleChange}/>
          
  </div>
  
    )}
  
  
    