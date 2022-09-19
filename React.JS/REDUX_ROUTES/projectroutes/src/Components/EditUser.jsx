import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

export const EditUser = () => {

    const objUrl = useParams();
    
    let url = "http://localhost:3001/users1/"
    console.log(objUrl.id)
    const navigate = useNavigate()
    const info = JSON.parse(localStorage.getItem("users"));
    const res = info.find((user)=> user.id == objUrl.id)
    const [details, setdetails] = useState(res)
    const handleChange = (e) =>{

        let newDetails = {...details};
        newDetails[e.target.name] = e.target.value;
        setdetails(newDetails);

    }

    const updateUser=()=>{
        axios.put(url+objUrl.id,details).then(()=>{
            navigate("/User")
        })
    }

    

    return (
    <div>
          <form>
                <div className="mb-3">
                    <label for="id" className="form-label">ID :</label>
                    <input type="text" name='id' value={details.id} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>
                
                <div className="mb-3">
                    <label for="name" className="form-label">Name :</label>
                    <input type="text" name='name' value={details.name} onChange={(e)=>{handleChange(e)}}  className="form-control"  />
                
                </div>

                <div className="mb-3">
                    <label for="username" className="form-label">Username :</label>
                    <input type="text" name='username' value={details.username} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>

                <div className="mb-3">
                    <label for="email" className="form-label">Email :</label>
                    <input type="text" name='email' value={details.email} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>

                <button type="button" className='btn btn-primary' onClick={updateUser}>Update User</button>
          </form>
    </div>

  )
}
