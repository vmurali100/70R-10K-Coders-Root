import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


export const SubjectDetails = () => {
    const [dataInfo, setdataInfo] = useState({})
    const urlObj = useParams();
    useEffect(() => {
        // console.log(urlObj)
        // const url = "http://localhost:3000/details/";
        // axios.get(`${url + urlObj.id}`).then((res) => {
        //     console.log(res.data)
        //     setdataInfo(res.data)
        // })
        const subjects = JSON.parse(localStorage.getItem("subjects"));
        const subject = subjects.find((sub)=> sub.id == urlObj.id)

        setdataInfo(subject)
    }, [])
    console.log(urlObj)
    return (
        <div className='container'>
            <div className="card">
                <div className="card-body">
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <h5 className="card-title">
                        {dataInfo.id}
                    </h5>
                    <p className="card-text">
                    {dataInfo.fname}
                    </p>

                    <p className="card-text">
                    {dataInfo.lname}
                    </p>
                    <p className="card-text">
                    {dataInfo.tel}
                    </p>
                    <p className="card-text">
                    {dataInfo.address}
                    </p>
                    <p className="card-text">
                    {dataInfo.city}
                    </p>
                    <p className="card-text">
                    {dataInfo.state}
                    </p>
                    <p className="card-text">
                    {dataInfo.zip}
                    </p>

                    <Link className="btn btn-primary" to="/Subjects">
                    Go to Subjects
                    </Link>
                    
                </div>
            </div>

        </div>
    )
}
