import { useState } from "react"
import React from 'react'

export const Func2 = () => {
    const [student, setstudent] = useState( {
        university : "",
        institute : "",
        website : ""
        
    })

    const handleChange = (event) =>{
          console.log(event.target.value)
          var inputname = event.target.name
          var newStudent = {...student}
          newStudent[inputname] = event.target.value
          setstudent(newStudent)
    }

    const handleSubmit = () =>{
        console.log(student)
    }
    return (
        <div>
            <form>
                <h2>Registration Details</h2>
                <label htmlFor="university"> University : </label>
                <input type="text" name="university" value={student.university} onChange={(event)=>{handleChange(event)}} /> <br />
                <label htmlFor="institute"> Institute : </label>
                <input type="text" name="institute" value={student.institute} onChange={(event)=>{handleChange(event)}} /> <br />
                <label htmlFor="website"> Website or Blog : </label>
                <input type="text" name="website" value={student.website} onChange={(event)=>{handleChange(event)}} /> <br />
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    )
}
