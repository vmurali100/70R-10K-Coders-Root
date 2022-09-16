import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Create = () => {

    const [user, setuser] = useState({
        id: "",
        email: "",
        username: "",
        password: ""
    })
    let url = "http://localhost:3000/Users/"

    const navigate = useNavigate()

    const handleChange = (e) => {
        let newUser = { ...user }
        newUser[e.target.name] = e.target.value
        setuser(newUser)
    }
    const addUser = () =>{
        axios.post(url,user).then(()=>{
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
                <button type="submit" onClick={addUser} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
