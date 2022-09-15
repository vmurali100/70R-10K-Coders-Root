import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const EditStudent = () => {
    const urlObj = useParams()

    let url = "http://localhost:4002/post"
    const navigate = useNavigate()
    const data = JSON.parse(localStorage.getItem("students"))
    const result = data.find((std)=> std.id == urlObj.id)

    const [students, setstudents] = useState(result)


    const handleChange=(e)=>{
        let newstudents = {...students}
        newstudents[e.target.name] = e.target.value;
        setstudents(newstudents)
    }

    const UpdateStudent=()=>{
      axios.put(url+urlObj.id,students).then(()=>{
            navigate("/")
        })

    }
  
     return(
     <div className='container'>
        <form>
        <label htmlFor=''>ID :</label>
           <input type="text" name="idt" value={students.id} onChange={(e)=>{handleChange(e)}} /> <br/>
           <label htmlFor="">Email :</label>
           <input type="text" name="email"value={students.email} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="">Username :</label>
           <input type="text" name="username"value={students.username} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="">Password :</label>
           <input type="text" name="password"value={students.password} onChange={(e)=>{handleChange(e)}}/> <br/>

           <button type="button" className='btn btn-primary' onClick={UpdateStudent}>Update</button>


</form>
    </div>
  )
}
