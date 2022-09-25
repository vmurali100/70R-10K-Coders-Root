import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Edit = () => {
     
    const objurl =useParams()

    let url="http://localhost:3010/none/"

const information= JSON.parse(localStorage.getItem("ajay"))

const result = information.find((a)=> a.id===objurl.id)

const [students, setstudents] = useState(result)

const navigate=useNavigate()

const handlechange=(e)=>{
     let newstudents={...students}
     newstudents[e.target.name]=e.target.value
     setstudents(newstudents)
}
const handleupdate=()=>{

     axios.put(url+objurl.id,students).then(()=>{
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
                <label htmlFor="dob">dob</label>
                <input type="text" name='dob' value={students.dob} onChange={(e) => { handlechange(e) }} /><br />
                <label htmlFor="email">email</label>
                <input type="text" name='email' value={students.email} onChange={(e) => { handlechange(e) }} /><br />
                <label htmlFor="mobilenumber">mobilenumber</label>
                <input type="text" name='mobilenumber' value={students.mobilenumber} onChange={(e) => { handlechange(e) }} /><br />

                <button type='button' onClick={handleupdate}>update</button>

            </form>
    </div>
  )
}
