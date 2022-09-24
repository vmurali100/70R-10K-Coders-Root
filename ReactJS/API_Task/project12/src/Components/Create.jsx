import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"
export const Create = () => {

    const [teacher, setteacher] = useState({
        "id":"" ,
        "fname":"",
        "lname": "",
        "city":""
   })
    const navigate= useNavigate()
    let url="http://localhost:3012/main/"



    const handleChange=(e)=>{
        let newTeachers={...teacher}
        newTeachers[e.target.name]=e.target.value
        setteacher(newTeachers)
    }
    const AddTeacher=()=>{
        axios.post(url,teacher).then(()=>{
            navigate('/')
        })

    }
    return (
        <div className='container'>
        <form>
        <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="id" className="form-control" name="id" value={teacher.id}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
            <label htmlFor="fname" className="form-label">fname</label>
          <input type="fname" className="form-control"  name="fname" value={teacher.fname}  onChange={(e)=>{handleChange(e)}}/>

            </div>

            <div className="mb-3">
                <label htmlFor="lname" className="form-label">lname</label>
                <input type="lname" className="form-control"  name="lname" value={teacher.lname}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="city" className="form-label">city</label>
                <input type="city" className="form-control"  name="city" value={teacher.city}  onChange={(e)=>{handleChange(e)}}/>

            </div>


    
           <button type="button" className='btn btn-primary' onClick={AddTeacher}>Add</button>
    
    
    </form>
    </div>
      )}
