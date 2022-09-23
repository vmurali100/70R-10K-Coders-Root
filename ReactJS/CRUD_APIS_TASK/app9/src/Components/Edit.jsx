import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios"

export const Edit = () => {
   const urlObj= useParams();
   let url="http://localhost:4010/college/"



  const info = JSON.parse(localStorage.getItem("Colleges"))
  const result = info.find((std)=> std.id == urlObj.id)
  console.log(urlObj)


  const [college, setcollege] = useState(result)
  const navigate= useNavigate()



  const UpdateCollege=()=>{
    axios.put(url+urlObj.id,college).then(()=>{
      navigate("/")
    })

  }
  const handleChange=(e)=>{
    let newColleges={...college}
   newColleges[e.target.name]=e.target.value
   setcollege(newColleges)

}
return (
    <div className='container'>
    <form>
    <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="id" className="form-control" name="id" value={college.id}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="university" className="form-label">University</label>
                <input type="university" className="form-control"  name="university" value={college.university}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
            <label htmlFor="institute" className="form-label">Institute</label>
          <input type="institute" className="form-control"  name="institute" value={college.institute}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="branch" className="form-label">Branch </label>
                <input type="branch" className="form-control"  name="branch" value={college.branch}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="degree" className="form-label">Degree </label>
                <input type="degree" className="form-control"  name="degree" value={college.degree}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="experience" className="form-label">Experience </label>
                <input type="experience" className="form-control"  name="experience" value={college.experience}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="yourwebsiteorblog" className="form-label">Yourwebsiteorblog </label>
                <input type="yourwebsiteorblog" className="form-control"  name="yourwebsiteorblog" value={college.yourwebsiteorblog}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            

       <button type="button" className='btn btn-primary' onClick={UpdateCollege}>Add</button>


</form>
</div>
  )}
    
