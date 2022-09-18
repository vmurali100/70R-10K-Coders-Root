import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios"

export const Edit = () => {
   const urlObj= useParams();
  let url="http://localhost:4005/albums/"


  const info = JSON.parse(localStorage.getItem("datausers"))
  const result = info.find((std)=> std.id == urlObj.id)
  console.log(urlObj)


  const [datauser, setdatauser] = useState(result)
  const navigate= useNavigate()



  const UpdateUser=()=>{
    axios.put(url+urlObj.id,datauser).then(()=>{
      navigate("/")
    })

  }
  const handleChange=(e)=>{
    let newUsers={...datauser}
   newUsers[e.target.name]=e.target.value
   setdatauser(newUsers)

}
  return (
    <div className='container'>
    <form>
    <label htmlFor=''>ID :</label>
       <input type="text" name="id" value={datauser.id} onChange={(e)=>{handleChange(e)}} /> <br/>
       <label htmlFor=''>UserId :</label>
       <input type="text" name="userId" value={datauser.userId} onChange={(e)=>{handleChange(e)}} /> <br/>
       <label htmlFor="">Title :</label>
       <input type="text" name="title"value={datauser.title} onChange={(e)=>{handleChange(e)}}/> <br/>

       <button type="button" className='btn btn-primary' onClick={UpdateUser}>Update</button>


</form>
</div>
  )}