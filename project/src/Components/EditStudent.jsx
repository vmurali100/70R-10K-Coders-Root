import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Edit = () => {
    const urlobj = useParams()

    let url = "http://localhost:3000/users/"

    const Info = JSON.parse(localStorage.getItem("users"))
    const result = Info.find((MM) => MM.id == urlobj.id)
    const [user, setuser] = useState(result)
    const navigate = useNavigate()

    const handleChange = (e) => {
        let newUser = { ...user }
        newUser[e.target.name] = e.target.value
        setuser(newUser)
    }
    const updateUser=()=>{
        axios.put(url+urlobj.id,user).then(()=>{
            navigate("/")
        })
    }
    return (
        <div>

            <form>
                <div className="mb-3">
                    <label for="id" className="form-label">ID</label>
                    <input type="id" name='id' value={user.id} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="email1" className="form-label">Email</label>
                    <input type="email" name='email' value={user.email} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="username" className="form-label">User Name</label>
                    <input type="username" name='username' value={user.username} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" name='password' value={user.password} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <button type="submit" onClick={updateUser} className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}