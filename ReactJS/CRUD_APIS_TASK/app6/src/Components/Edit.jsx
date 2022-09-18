import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios"

export const Edit = () => {
   const urlObj= useParams();
   let url="http://localhost:4007/users/"



  const info = JSON.parse(localStorage.getItem("Users"))
  const result = info.find((std)=> std.id == urlObj.id)
  console.log(urlObj)


  const [user, setuser] = useState(result)
  const navigate= useNavigate()



  const UpdateUser=()=>{
    axios.put(url+urlObj.id,user).then(()=>{
      navigate("/")
    })

  }
  const handleChange=(e)=>{
    let newUsers={...user}
   newUsers[e.target.name]=e.target.value
   setuser(newUsers)

}
  return (
    <div className='container'>
    <form>
    <label htmlFor=''>ID :</label>
       <input type="text" name="id" value={user.id} onChange={(e)=>{handleChange(e)}} /> <br/>
       <label htmlFor=''>FirstName :</label>
       <input type="text" name="fname" value={user.fname} onChange={(e)=>{handleChange(e)}} /> <br/>
       <label htmlFor="">LastName :</label>
       <input type="text" name="lname"value={user.lname} onChange={(e)=>{handleChange(e)}}/> <br/>
       <label htmlFor="">Telephone :</label>
       <input type="text" name="tel"value={user.tel} onChange={(e)=>{handleChange(e)}}/> <br/>
       <label htmlFor="">Address :</label>
       <input type="text" name="address"value={user.address} onChange={(e)=>{handleChange(e)}}/> <br/>
       <label htmlFor="">City :</label>
       <input type="text" name="city"value={user.city} onChange={(e)=>{handleChange(e)}}/> <br/>
       <label htmlFor="">State :</label>
       <input type="text" name="state"value={user.state} onChange={(e)=>{handleChange(e)}}/> <br/>
       <label htmlFor="">Zipcode :</label>
       <input type="text" name="zip"value={user.zip} onChange={(e)=>{handleChange(e)}}/> <br/>


       <button type="button" className='btn btn-primary' onClick={UpdateUser}>Add</button>


</form>
</div>
  )}

