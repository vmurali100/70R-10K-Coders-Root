import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';


export const CreateStudent = () => {
    const navigate =useNavigate();
    const [student, setstudent] = useState({
        id:" ",
        email:" ",
        username:"",
        password:" "
    })

   
    let url ="http://localhost:4002/post"
    const handleChange=(e)=>{
        let newStudent={...student}
        newStudent[e.target.name]=e.target.value
        setstudent(newStudent)
    }


    const submitStudent=()=>{
        axios.post(url,student).then((res)=>{
            console.log(res.data)
              setstudent(res.data)
                navigate("/")
        })
    }
    

  return (
    <div className='container'>
        <form>
        <label htmlFor=''>ID :</label>
           <input type="text" name="idt" value={student.id} onChange={(e)=>{handleChange(e)}} /> <br/>
           <label htmlFor="">Email :</label>
           <input type="text" name="email"value={student.email} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="">Username :</label>
           <input type="text" name="username"value={student.username} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="">Password :</label>
           <input type="text" name="password"value={student.password} onChange={(e)=>{handleChange(e)}}/> <br/>
           <button type="button" class="btn btn-primary" onClick={submitStudent()}>Submit</button>


</form>
    </div>
  )
}
