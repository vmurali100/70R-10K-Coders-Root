import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';

export const Dating = () => {
    const [dating, setdating] = useState({
        username:"",
        password:"",
        email:""
    });

    let url="http://localhost:3000/dating/"

    const [datingArr, setdatingArr] = useState([]);

    useEffect(()=>{getDataFromServer()},[])

    const handleChange=(e)=>{
        let newDating = {...dating};
        newDating[e.target.name] = e.target.value;
        setdating(newDating);
    }

    const addUser=()=>{
        axios.post(url,dating).then(()=>{
            console.log("user added successfully");
            clearform();
            getDataFromServer();
        })
    }

    const getDataFromServer=()=>{
        axios.get(url).then((res)=>{
            console.log(res.data);
            setdatingArr(res.data);
       })
    }

    const clearform=()=>{
        setdating({
            username:"",
            password:"",
            email:""
        })
    }

    const editUser=(std)=>{
        setdating(std)

    }

    const deleteUser=(user)=>{
        axios.delete(url+user.id).then(()=>{
            console.log("user deleted successfully");
            getDataFromServer();
        })

    }

    const updateUser=()=>{
        axios.put(url+dating.id,dating).then(()=>{
            console.log("user updated successfully");
            clearform();
            getDataFromServer();
        })

    }


  return (
    <div>
        <form>
            <label htmlFor="username">Username</label> <br/>
            <input type="text" name="username" value={dating.username} onChange={(e)=>{handleChange(e)}}/> <br />

            <label htmlFor="password">Password</label> <br/>
            <input type="text" name="password" value={dating.password} onChange={(e)=>{handleChange(e)}}/> <br />

            <label htmlFor="email">Email</label> <br/>
            <input type="text" name="email" value={dating.email} onChange={(e)=>{handleChange(e)}}/> <br />
 
            <button type="button" onClick={addUser}>Add User</button>
            <button type="button" onClick={updateUser}>Update User</button>
        </form>
        <table className="table">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {datingArr.map((user,i)=>{
                    return <tr key={i}>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.email}</td>
                        <td><button type="button" className="btn btn-warning" onClick={()=>{editUser(user)}}>Edit</button></td>
                        <td><button type="button" className="btn btn-danger" onClick={()=>{deleteUser(user)}}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}
