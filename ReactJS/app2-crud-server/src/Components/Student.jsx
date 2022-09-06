/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'

export const Student = () => {
    const [student, setstudent] = useState({
        Fname:"",
        Lname:""
    })
    const [data, setdata] = useState([])
   
    let url = "http://localhost:3000/users/"

    useEffect(()=>{
        getDataFromServer()
    },[])
    const handlechange=(e)=>{
        let newStudent = {...student} 
        newStudent[e.target.name] = e.target.value
        setstudent(newStudent)
    }
    // for data posting
    const addUser=()=>{
       
        axios.post(url,student).then(()=>{
            console.log("User added Successfully")
            clearForm()
            getDataFromServer()
        })
    }
    // for clearing the form 
    const clearForm=()=>{
        setstudent({
            Fname:"",
            Lname:""
        })
    }
    // for display the user
    const getDataFromServer=()=>{
        axios.get(url).then((response)=>{
            console.log(response);
            setdata(response.data)
        })
    }
    // for deleting an user
    const handleDelete=(std)=>{
        axios.delete(url+std.id).then(()=>{
            console.log("User Deleted Successfully")
            getDataFromServer()
        })
    }
    // for editing an user
    const editStudent=(std)=>{
        setstudent(std)
    }
    // for updating an user
    const updateUser=()=>{
        console.log(student)
        axios.put(url+student.id,student).then(()=>{

            console.log("Updated");
            getDataFromServer()
            clearForm()
        })
    }
  return (
    <div>
        <h2>Student</h2>
        <form>
            <label htmlFor="Firstname"> First Name : </label>
            <input type="text" name="Fname"  value={student.Fname} onChange={(e)=>{handlechange(e)}}/> <br />
            <label htmlFor="Lastname"> Last Name : </label>
            <input type="text" name="Lname"  value={student.Lname} onChange={(e)=>{handlechange(e)}}/> <br />
            <button type='button' onClick={addUser}>Add User</button>
            <button type='button' onClick={updateUser}>Update User</button>
            <hr />
            <table border={1}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((std,i)=>{
                        return(
                            <tr key={i}>
                                <td>{std.Fname}</td>
                                <td>{std.Lname}</td>
                                <td><button  onClick={()=>{editStudent(std)}} type="button">Edit</button></td>
                                <td><button onClick={()=>{handleDelete(std)}} type="button">Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </form>
    </div>
  )
}
