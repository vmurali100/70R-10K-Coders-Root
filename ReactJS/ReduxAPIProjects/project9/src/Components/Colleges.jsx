import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllColleges } from '../store/collegesSlice'
import { useNavigate } from "react-router-dom";



export const Colleges = () => {
     const collegeDetails=useSelector((state)=>state.colleges);//for accessing state
     
   console.log(collegeDetails.colleges)
   localStorage.setItem('colleges',JSON.stringify(collegeDetails.colleges))


   const dispatch = useDispatch();
   const navigate= useNavigate()


   const getcolleges=()=>{
    dispatch(getAllColleges());
   }
   
   useEffect(()=>{
        getcolleges()
   },[])
   const handleDelete=(college)=>{
    navigate(`delete/${college.id}`)
  }
  const handleEdit=(college)=>{
    navigate(`edit/${college.id}`)
  }
  return (
      <div className='container'>
          <table class="table table-dark table-striped">
            
            <thead>
              <tr>
                <th>ID</th>
                <th>University</th>
                <th>Institute</th>
                <th>Branch</th>
                <th>Degree</th>
                <th>Experience</th>
                <th>Yourwebsiteorblog</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {collegeDetails.colleges.map((college,i)=>(
              <tr key={i}>
    
                <td>{college.id}</td>
                <td>{college.university}</td>
                <td>{college.institute}</td>
                <td>{college.branch}</td>
                <td>{college.degree}</td>
                <td>{college.experience}</td>
                <td>{college.yourwebsiteorblog}</td>






                
                <td><button className='btn btn-warning' onClick={()=>{handleEdit(college)}}>Edit</button></td>
                <td><button className='btn btn-danger' onClick={()=>{handleDelete(college)}}>Delete</button></td>
             </tr>))}
            </tbody>
            </table>
      
        </div>
      )
    
      
    }
    