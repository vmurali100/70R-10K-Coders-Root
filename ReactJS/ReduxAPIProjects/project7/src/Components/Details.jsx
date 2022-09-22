import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllDetails } from '../store/detailsSlice'
import { useNavigate } from "react-router-dom";



export const Details = () => {
     const detailsDetails=useSelector((state)=>state.details);//for accessing state
     
   console.log(detailsDetails.details)
   localStorage.setItem('details',JSON.stringify(detailsDetails.details))


   const dispatch = useDispatch();
   const navigate= useNavigate()


   const getdetails=()=>{
    dispatch(getAllDetails());
   }
   
   useEffect(()=>{
        getdetails()
   },[])
   const handleDelete=(detail)=>{
    navigate(`delete/${detail.id}`)
  }
  const handleEdit=(detail)=>{
    navigate(`edit/${detail.id}`)
  }
  return (
      <div className='container'>
          <table class="table table-dark table-striped">
            
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {detailsDetails.details.map((detail,i)=>(
              <tr key={i}>
    
                <td>{detail.id}</td>
                <td>{detail.fname}</td>
                <td>{detail.lname}</td>
                
                <td><button className='btn btn-warning' onClick={()=>{handleEdit(detail)}}>Edit</button></td>
                <td><button className='btn btn-danger' onClick={()=>{handleDelete(detail)}}>Delete</button></td>
             </tr>))}
            </tbody>
            </table>
      
        </div>
      )
    
      
    }
    