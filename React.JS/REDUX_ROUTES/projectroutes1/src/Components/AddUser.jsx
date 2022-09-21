import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AddUser = () => {
    const [details, setdetails] = useState({
        id : "",
        name : "",
        username : "",
        email : ""
    });

    const navigate =  useNavigate()

    let url = "http://localhost:3001/users1/"

    const handleChange = e => {
       let newDetails = {...details};
       newDetails[e.target.name] = e.target.value;
       
       setdetails(newDetails);
    }

    const addUser=()=>{
        axios.post(url,details).then(()=>{
            console.log("user added successfully");
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

                <button type="button" className='btn btn-primary' onClick={addUser}>Add User</button>

                <Link to="/User" className='btn btn-primary'>Go back to User</Link>
            </form>
        </div>
    )
}
