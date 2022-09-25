import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Edit = () => {

    const objurl = useParams()

    let url = " http://localhost:3030/bro/"

    const information = JSON.parse(localStorage.getItem("vro"))

    const result = information.find((a) => a.id === objurl.id)

    const [students, setstudents] = useState(result)

    const navigate = useNavigate()

    const handlechange = (e) => {
        let newstudents = { ...students }
        newstudents[e.target.name] = e.target.value
        setstudents(newstudents)
    }
    const handleupdate = () => {

        axios.put(url + objurl.id, students).then(() => {
            navigate("/")
        })
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
                <label htmlFor="lname">title</label>
                <input type="text" name='title' value={students.title} onChange={(e) => { handlechange(e) }} /><br />
                <label htmlFor="lname">completed</label>
                <input type="text" name='completed' value={students.completed} onChange={(e) => { handlechange(e) }} /><br />

                <button type='button' onClick={handleupdate}>update</button>

            </form>
        </div>
    )
}
