import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"
export const Create = () => {

    const [detail, setdetail] = useState({fname:"",lname:""})
    const navigate= useNavigate()
    let url="http://localhost:4008/details/"


    const handleChange=(e)=>{
        let newDetails={...detail}
        newDetails[e.target.name]=e.target.value
        setdetail(newDetails)
    }
    const AddDetail=()=>{
        axios.post(url,detail).then(()=>{
            navigate('/')
        })

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
           
    
           <button type="button" className='btn btn-primary' onClick={AddDetail}>Add</button>
    
    
    </form>
    </div>
      )}
    