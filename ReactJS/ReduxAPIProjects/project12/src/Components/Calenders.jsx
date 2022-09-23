import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllCalenders } from '../store/calendersSlice'
import { useNavigate } from "react-router-dom";



export const Calenders = () => {
     const calenderDetails=useSelector((state)=>state.calenders);//for accessing state
     
   console.log(calenderDetails.calenders)
   localStorage.setItem('calenders',JSON.stringify(calenderDetails.calenders))


   const dispatch = useDispatch();
   const navigate= useNavigate()


   const getcalenders=()=>{
    dispatch(getAllCalenders());
   }
   
   useEffect(()=>{
        getcalenders()
   },[])
   const handleDelete=(calender)=>{
    navigate(`delete/${calender.id}`)
  }
  const handleEdit=(calender)=>{
    navigate(`edit/${calender.id}`)
  }
  return (
      <div className='container'>
          <table class="table table-dark table-striped">
            
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Password</th>
                <th>EmailAddress</th>
                <th>Dateofbirth</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {calenderDetails.calenders.map((calender,i)=>(
              <tr key={i}>
    
                <td>{calender.id}</td>
                <td>{calender.username}</td>
                <td>{calender.password}</td>
                <td>{calender.emailaddress}</td>
                <td>{calender.dateofbirth}</td>
                <td>{calender.height}</td>
                <td>{calender.weight}</td>



                <td><button className='btn btn-warning' onClick={()=>{handleEdit(calender)}}>Edit</button></td>
                <td><button className='btn btn-danger' onClick={()=>{handleDelete(calender)}}>Delete</button></td>
             </tr>))}
            </tbody>
            </table>
      
        </div>
      )
    
      
    }
    