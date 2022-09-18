import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"



export const Create = () => {
    const [datauser, setdatauser] = useState({})
    let url="http://localhost:4005/albums/"
    const navigate= useNavigate()
    const AddUser=()=>{
        axios.post(url,datauser).then(()=>{
            navigate('/')
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
    
           <button type="button" className='btn btn-primary' onClick={AddUser}>Add</button>
    
    
    </form>
    </div>
      )}
