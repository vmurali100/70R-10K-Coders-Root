import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Create = () => {

    const [user, setuser] = useState({
        id: "",
        fname: "",
        lname: "",
        city: ""
    })
    let url = "http://localhost:3006/main/"

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
                    <label for="fname" className="form-label">Fname</label>
                    <input type="fname" name='fname' value={user.fname} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="lname" className="form-label">Lname</label>
                    <input type="lname" name='lname' value={user.lname} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="city" className="form-label">City</label>
                    <input type="city" name='city' value={user.city} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <button type="submit" onClick={addUser} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}