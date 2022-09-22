
  import React,{useState} from 'react'
  import { useDispatch } from 'react-redux';
  import { createCollegeAction } from '../store/collegesSlice';
  import { useNavigate } from "react-router-dom";
  import { UserForm } from './UserForm'

  
  
  export const Create = () => {
      const btnText ="Add College";
      const [college, setcollege] = useState({id:"",university:"",institute:"",branch:"",degree:"",experience:"",yourwebsiteorblog:""})
      const dispatch=useDispatch();
      const navigate=useNavigate()
      const handleCreate=()=>{
          dispatch(createCollegeAction(college))
          navigate("/")
  
          
      }
      const handleChange=(e)=>{//for giving inputs
          let newColleges={...college}
          newColleges[e.target.name]=e.target.value
          setcollege(newColleges)
  
      }
  
    return (    
      <div className="container">
          <UserForm btnText={btnText} college={college} handleEvent={handleCreate} handleChangeEvent={handleChange}/>
          
  </div>
  
    )}
  
  
    