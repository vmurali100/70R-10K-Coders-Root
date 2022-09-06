import React,{useEffect, useState} from 'react';
import axios from 'axios'

export const Student = () => {
    const [student,setstudent] = useState({fname:"",lname:""})//declaration
    const [students, setstudents] = useState([])


    let url="http://localhost:3000/users";
    useEffect(()=>{//by default to get data from server
    getDataFromServer()
    })

    


    const  getDataFromServer =()=>{//to bring data from server
        axios.get(url).then((response)=>{
            console.log(response)
            setstudents(response.data)

        })
    }
    const handleChange=(e)=>{
        let newStudent={...student}// we are creating anew copy.
        newStudent[e.target.name]=e.target.value
        setstudent(newStudent)
    }
    const addUser =()=>{
        axios.post(url,student).then(()=>{
            console.log("User added successfully")
            clearForm();
            getDataFromServer();
        });

    }
    const clearForm =()=>{
        setstudent({
            fname:"",
            lname:""
        })
    }
    const handleDelete=(std)=>{
        axios.delete(url+std.id).then(()=>{
            console.log("User deleted successfully")
            getDataFromServer();



        })
    }

  return (
    <div>
        <form>
            <label htmlFor='fname'>First Name: </label>
            <input type="text" name='fname' value={Student.fname} onChange={((e)=>{handleChange(e)})}/><br/>
            <label htmlFor='lname'>Last Name: </label>
            <input type="text" name='lname' value={Student.lname} onChange={((e)=>{handleChange(e)})}/><br/>
            <button type ="button" onClick={addUser}>Add User</button>
            <hr/>
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
                    {students.map((std,i)=>{
                        return <tr key={i}>
                            <td>{std.fname}</td>
                            <td>{std.lname}</td>
                            <td><button type="button">Edit</button></td>
                            <td><button type="button" onClick={()=>{handleDelete(std,i)}}>Delete</button></td>

                        </tr>
                    })}
                </tbody>
            </table>
        </form>
    </div>
  )
}
