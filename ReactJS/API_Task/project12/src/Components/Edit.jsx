import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios"

export const Edit = () => {
   const urlObj= useParams();
   let url="http://localhost:3012/main/"



  const info = JSON.parse(localStorage.getItem("users"))
  const result = info.find((std)=> std.id == urlObj.id)
  console.log(urlObj)


  const [teacher, setteacher] = useState(result)
  const navigate= useNavigate()



  const UpdateTeacher=()=>{
    axios.put(url+urlObj.id,teacher).then(()=>{
      navigate("/")
    })

  }
  const handleChange=(e)=>{
    let newTeachers={...teacher}
   newTeachers[e.target.name]=e.target.value
   setteacher(newTeachers)

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

                                   

       <button type="button" className='btn btn-primary' onClick={UpdateTeacher}>Update</button>


</form>
</div>
  )}
