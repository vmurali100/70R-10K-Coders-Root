import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios"

export const Edit = () => {
   const urlObj= useParams();
   let url="http://localhost:4008/details/"



  const info = JSON.parse(localStorage.getItem("Details"))
  const result = info.find((std)=> std.id == urlObj.id)
  console.log(urlObj)


  const [detail, setdetail] = useState(result)
  const navigate= useNavigate()



  const UpdateDetail=()=>{
    axios.put(url+urlObj.id,detail).then(()=>{
      navigate("/")
    })

  }
  const handleChange=(e)=>{
    let newDetails={...detail}
   newDetails[e.target.name]=e.target.value
   setdetail(newDetails)

}
    return (
        <div className='container'>
        <form>
        <label htmlFor=''>ID :</label>
           <input type="text" name="id" value={detail.id} onChange={(e)=>{handleChange(e)}} /> <br/>
           <label htmlFor=''>FirstName :</label>
           <input type="text" name="fname" value={detail.fname} onChange={(e)=>{handleChange(e)}} /> <br/>
           <label htmlFor="">LastName :</label>
           <input type="text" name="lname"value={detail.lname} onChange={(e)=>{handleChange(e)}}/> <br/>
           
    
           <button type="button" className='btn btn-primary' onClick={UpdateDetail}>Add</button>
    
    
    </form>
    </div>
      )}