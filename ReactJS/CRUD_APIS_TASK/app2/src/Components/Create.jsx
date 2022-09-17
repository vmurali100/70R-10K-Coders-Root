import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"


export const Create = () => {
    const [user, setuser] = useState({id:"",userId:"",title:"",body:""})
    let url ="http://localhost:4003/posts"
    const navigate =useNavigate();



   const handleChange =(e)=>{
   let newUsers={...user}
   newUsers[e.target.name]=e.target.value
   setuser(newUsers)
   
}

    const  AddUser=()=>{
        axios.post(url, user).then((res) => {
        console.log(res.data);
        setuser(res.data);
        navigate('/')
    })
}
    
  return (
    <div className='container'>
    <form>
    <label htmlFor=''>ID :</label>
       <input type="text" name="id" value={user.id} onChange={(e)=>{handleChange(e)}} /> <br/>
       
       <label htmlFor="">Title :</label>
       <input type="text" name="title"value={user.title} onChange={(e)=>{handleChange(e)}}/> <br/>
       <label htmlFor="">Body :</label>
       <input type="text" name="body"value={user.body} onChange={(e)=>{handleChange(e)}}/> <br/>

       <button type="button" className='btn btn-primary' onClick={AddUser}>Add</button>


</form>
</div>
  )}