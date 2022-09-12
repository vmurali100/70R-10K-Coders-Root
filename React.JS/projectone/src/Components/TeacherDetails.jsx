import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const TeacherDetails = () => {
    const [teacherInfo, setteacherInfo] = useState({})

    const objUrl = useParams();

    useEffect(() => {
        const teachers = JSON.parse(localStorage.getItem("teachers"));
        console.log(teachers);
        const teacher = teachers.find((tea) => tea.id == objUrl.id)
        setteacherInfo(teacher);
    }, [])
    return (
        <div className='container'>
            {Object.keys(teacherInfo).length > 0 && <div class="card">

                <div className="card-body">
                    <h5 className="card-title">
                        {teacherInfo.name}
                        </h5>
                    <p className="card-text">
                         {teacherInfo.sub_teaches}
                    </p>
                    <p className="card-text">
                        {teacherInfo.eamil}
                    </p>
                    <p className='card-text'>
                        {teacherInfo.phone}
                    </p>
                    <Link to="/Teachers" className='btn btn-primary'>Go back to teachers</Link>
                </div>
            </div>}
        </div>
    )
}
