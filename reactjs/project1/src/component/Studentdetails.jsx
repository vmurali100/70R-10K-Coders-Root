import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
export const Studentdetails = () => {
    const [studentinfo, setstudentinfo] = useState({})
    const urlobj = useParams()

    useEffect(() => {
        console.log(urlobj)
        // const url = "https://jsonplaceholder.typicode.com/users/"
        // axios.get(`${url + urlobj.id}`).then((res) => {
        //     console.log(res.data)
        //     setstudentinfo(res.data)
        // })

        const students =JSON.parse(localStorage.getItem("students"))
        const student=students.find((std)=>std.id==urlobj.id)
        console.log(student)
        setstudentinfo(student)
    }, [])

    return (
        <div>
        {Object.keys(studentinfo).length > 0 &&     <div className="card" >

<div className="card-body">
  <h5 className="card-title">{studentinfo.name}</h5>
  <p className="card-text">{studentinfo.phone}</p>
  <p className="card-text">{studentinfo.username}</p>
  <p className="card-text">{studentinfo.website}</p>
  <p><b>company details</b></p>
  <p className="card-text">{studentinfo.company.name}</p>
  <p className="card-text">{studentinfo.company.catchPhrase}</p>
  <p className="card-text">{studentinfo.company.bs}</p>

  <p><b>Address</b></p>
  <p className="card-text">{studentinfo.address.city}</p>
  <p className="card-text">{studentinfo.address.street}</p>
  <p className="card-text">{studentinfo.address.suite}</p>
  <p className="card-text">{studentinfo.address.zipcode}</p>
  <Link  className="btn btn-primary" to="/">Go back to students</Link>
  <a href="#"></a>
</div>
</div>}
        </div>
    )
}
