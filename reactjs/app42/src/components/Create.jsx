import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




export const Create = () => {
    const [students, setstudents] = useState({
        id: "",
        fname: "",
        lname: "",
      
    })

    let url = "  http://localhost:3011/vijay"

    const navigate = useNavigate()

    const handlesubmit = () => {

        axios.post(url, students).then((res) => {
            console.log(res.data)
            setstudents(res.data)
            navigate("/")
        })
    }



    const handlechange = (e) => {
        let newstudents = { ...students }
        newstudents[e.target.name] = e.target.value
        setstudents(newstudents)
    }

    return (

        <div>
            <form >
                <label htmlFor="id">id</label>
                <input type="text" name="id" value={students.id} onChange={(e) => { handlechange(e) }} /><br />
                <label htmlFor="fname">fname</label>
                <input type="text" name="fname" value={students.fname} onChange={(e) => { handlechange(e) }} /><br />
                <label htmlFor="lname">lname</label>
                <input type="text" name='lname' value={students.lname} onChange={(e) => { handlechange(e) }} /><br />
                

                <button type='button' onClick={handlesubmit}>submit</button>

            </form>


        </div>
    )
}
