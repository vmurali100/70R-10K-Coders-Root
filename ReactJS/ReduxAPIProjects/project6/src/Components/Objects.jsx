import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllObjects } from '../store/objectsSlice'
import { useNavigate } from "react-router-dom";



export const Objects = () => {
     const objectsDetails=useSelector((state)=>state.objects);//for accessing state
     
   console.log(objectsDetails.objects)
   localStorage.setItem('objects',JSON.stringify(objectsDetails.objects))


   const dispatch = useDispatch();
   const navigate= useNavigate()


   const getobjects=()=>{
    dispatch(getAllObjects());
   }
   
   useEffect(()=>{
        getobjects()
   },[])
   const handleDelete=(object)=>{
    navigate(`delete/${object.id}`)
  }
  const handleEdit=(object)=>{
    navigate(`edit/${object.id}`)
  }
  return (
      <div className='container'>
          <table class="table table-dark table-striped">
            
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Telephone</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zipcode</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {objectsDetails.objects.map((object,i)=>(
              <tr key={i}>
    
                <td>{object.id}</td>
                <td>{object.fname}</td>
                <td>{object.lname}</td>
                <td>{object.tel}</td>
                <td>{object.address}</td>
                <td>{object.city}</td>
                <td>{object.state}</td>
                <td>{object.zip}</td>
                <td><button className='btn btn-warning' onClick={()=>{handleEdit(object)}}>Edit</button></td>
                <td><button className='btn btn-danger' onClick={()=>{handleDelete(object)}}>Delete</button></td>
             </tr>))}
            </tbody>
            </table>
      
        </div>
      )
    
      
    }
    