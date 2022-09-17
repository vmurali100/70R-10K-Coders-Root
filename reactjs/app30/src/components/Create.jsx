import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const Create = () => {
    const [das, setdas] = useState({
        id: "",
        fname: "",
        lname: ""
    })

    let url = "http://localhost:4000/one/"

    const navigate = useNavigate()

    const handlesubmit = () => {
        axios.post(url, das).then((res) => {
            console.log(res.data)
            setdas(res.data)
            navigate("/")
        })

    }

    const handlechange = (e) => {
        let newdass = { ...das }
        newdass[e.target.name] = e.target.value
        setdas(newdass)
    }
    return (
        <div>
            <form >


                <input type="text" name='id' value={das.id} onChange={(e) => { handlechange(e) }} /> <br />
                <label htmlFor="id">ID</label>

                <label htmlFor="fnmae">FNAME</label>
                <input type="text" name='fname' value={das.fname} onChange={(e) => { handlechange(e) }} /> <br />
                <label htmlFor="lnmae">LNAME</label>
                <input type="text" name='lname' value={das.lname} onChange={(e) => { handlechange(e) }} /> <br />

                <button type='button' className='btn btn-primary' onClick={handlesubmit} >SUBMIT</button>
            </form>
        </div>
    )
}
