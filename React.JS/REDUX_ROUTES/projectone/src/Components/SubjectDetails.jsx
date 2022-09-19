import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link} from 'react-router-dom'

export const SubjectDetails = () => {
    const [subjectInfo, setsubjectInfo] = useState({})

    const urlObj = useParams()

    useEffect(() => {
        const subjects = JSON.parse(localStorage.getItem("subjects"));
        const subject = subjects.find((sub) => sub.id == urlObj.id);
        setsubjectInfo(subject)
    }, [])
    return (
        <div className='container'>
            {Object.keys(subjectInfo).length > 0 && <div class="card">

                <div class="card-body">
                    <h5 class="card-title">{subjectInfo.subcode}</h5>
                    <p class="card-text">{subjectInfo.subname}</p>
                    <Link className='btn btn-primary' to="/Subjects">Go back to subjects</Link>
                </div>
            </div>}
        </div>
    )
}
