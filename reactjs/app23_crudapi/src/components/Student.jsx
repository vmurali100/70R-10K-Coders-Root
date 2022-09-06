import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

export const Student = () => {
    const [student, setstudent] = useState({
        firstname: "",
        lastname: "",
    })

    const [students, setstudents] = useState([])

    const getdatafromserver = () => {
        let url = "http://localhost:3000/user"
        axios.get(url).then((response) => {
            console.log(response)
            setstudents(response.data)
        })
    }

    let url = "http://localhost:3000/user"

    useEffect(() => {

        getdatafromserver()
    }, [])

    const handlechange = (e) => {
        let newstudent = { ...student }
        newstudent[e.target.name] = e.target.value
        setstudent(newstudent)
    }

    const adduser = () => {
        let url = "http://localhost:3000/user"
        axios.post(url, student).then(() => {
            console.log("user added successfully")
            clearform()
            getdatafromserver()

        })
    }

    const clearform = () => {
        setstudent({
            firstname: "",
            lastname: "",
        })
    }

    const handledit = (std) => {
        setstudent(std)

    }

    const handledelete = (std) => {
        axios.delete(url + std.id).then(() => {
            console.log("user deleted successfully")
            getdatafromserver()
        })
    }

    const handleupdate=()=>{
        axios.put(url+student.id,student).then(()=>{
            console.log("updated successfully")
            getdatafromserver();
            clearform()
        })
    }
    return (
        <div>
            <form >
                <label htmlFor="firstname">firstname :</label>
                <input type="text" name="firstname" value={student.firstname} onChange={(e) => { handlechange(e) }} /><br />
                <label htmlFor="lastname">lastname :</label>
                <input type="text" name="lastname" value={student.lastname} onChange={(e) => { handlechange(e) }} /><br />
                <button type='button'  onClick={adduser}>add user</button>
                <button type='button' onClick={handleupdate} >updateuser</button>
            </form>

            <hr />

            <table border={2}>
                <thead>
                    <tr>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((std, i) => {
                        return <tr key={i}>
                            <td>{std.firstname}</td>
                            <td>{std.lastname}</td>
                            <td> <button onClick={() => { handledit(std) }}>EDIT</button> </td>
                            <td> <button onClick={() => { handledelete(std) }}>DELETE</button> </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
