import axios from 'axios';
import React,{useState} from 'react'
import { useEffect } from 'react';

export const UserApi = () => {
    const [obj1, setobj1] = useState({
        fname:"",
        lname:"",
    })
    const [apiData, setdata] = useState([]);
    let url="http://localhost:3000/users/";

    useEffect(()=>{
        getData();
    },[])

    const handleChange=(e)=>{
        let obj2 = {...obj1};
        obj2[e.target.name] = e.target.value;
        setobj1(obj2);
    }
    
    const editUser=(user)=>{
        setobj1(user);
    }

    const updateUser=()=>{
        axios.put(url+obj1.id,obj1).then(()=>{
            console.log("updated");
            clearForm();
            getData();
        })
    }

    // const handleSubmit =()=>{
    //     console.log(obj1);
    // }

    const addUser =()=>{        
        axios.post(url,obj1).then(()=>{
            console.log("User added");
            clearForm();
            getData();
        })
    }
    const getData=()=>{
        axios.get(url).then((response)=>{
            //console.log(response);
            setdata(response.data);
            // console.log(response.data);            
        })
    }

    const clearForm=()=>{
        setobj1({
            fname:"",
            lname:"",
        })
    }

    const deleteUser=(user)=>{
        axios.delete(url+user.id).then(()=>{
            console.log("User deleted");
            getData();
        })
    }
  return (
    <div>
        <form action="">
            <label htmlFor="First Name" >First Name : </label>
            <input type="text" name="fname" value={obj1.fname} onChange={(e)=>{handleChange(e)}}/> <br />
            <label htmlFor="Last Name" >Last Name : </label>
            <input type="text" name="lname" value={obj1.lname} onChange={(e)=>{handleChange(e)}}/> <br />
            <button type="button" onClick={()=>{addUser()}}>Submit</button>
            <button type="button" onClick={()=>{updateUser()}}>Update</button>

        </form>
        <hr />
        <table border={2}>
            <thead>
                <tr>
                    <th>Fname</th>
                    <th>Lname</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {apiData.map((user,i)=>{
                    return <tr key={i} >
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td><button type="button" onClick={()=>{editUser(user)}}>Edit</button></td>
                        <td><button type="button" onClick={()=>{deleteUser(user)}}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
