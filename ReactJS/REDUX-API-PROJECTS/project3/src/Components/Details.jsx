import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { getAllDetails } from '../store/detailsSlice'



export const Details = () => {

    const detailDetails =  useSelector((state)=>state.details);
    localStorage.setItem('details',JSON.stringify(detailDetails.details))
    const dispatch = useDispatch()
    const navigate =useNavigate()
    const getdetails = () => {
        dispatch(getAllDetails())
    }

    useEffect(() => {

        getdetails()
    }, [])

    const handleDelete = (detail) => {
        navigate(`delete/${detail.id}`)
        // dispatch(deleteUser(detail))
    }

    const handleEdit = (detail) => {
        navigate(`edit/${detail.id}`)
    }

  
  return (
      <div className='container'>
          <table class="table table-dark table-striped">
            
            <thead>
              <tr>
                <th>ID</th>
                <th>Fname</th>
                <th>Lname</th>
                <th>Tel</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {detailDetails.details.map((detail,i)=>(
              <tr key={i}>
    
                <td>{detail.id}</td>
                <td>{detail.fname}</td>
                <td>{detail.lname}</td>
                <td>{detail.tel}</td>
                <td>{detail.address}</td>
                <td>{detail.city}</td>
                <td>{detail.state}</td>
                <td>{detail.zip}</td>
                <td><button className='btn btn-warning' onClick={()=>{handleEdit(detail)}}>Edit</button></td>
                <td><button className='btn btn-danger' onClick={()=>{handleDelete(detail)}}>Delete</button></td>
             </tr>))}
            </tbody>
            </table>
    
            
    
    
    
      
        </div>
      )
    
      
    }