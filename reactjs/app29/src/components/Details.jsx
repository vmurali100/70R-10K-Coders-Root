import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Details = () => {


    const objurl = useParams()


    const [students, setstudents] = useState({})

    useEffect(() => {

        const information = JSON.parse(localStorage.getItem("ajay"))

        const result = information.find((a) => a.id == objurl.id)
        setstudents(result)
    }, [])
    return (
        <div>
            {Object.keys(students).length > 0 && <div class="card" >

                <div class="card-body">

                    <p class="card-text">{students.id}</p>
                    <p class="card-text">{students.fname}</p>
                    <p class="card-text">{students.lname}</p>
                    <p class="card-text">{students.dob}</p>
                    <p class="card-text">{students.email}</p>
                    <p class="card-text">{students.mobilenumber}</p>
                    <Link to="/" className='btn-btn-primary'>GO BACK TO STUDENTS</Link>
                </div>
            </div>}

        </div>
    )
}
