import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'

export const UserApi2 = () => {
    let url="http://localhost:3000/users";

    // const [userData,setusers] = useState([]);
    const [user, setuser] = useState({
        Id:"",
        email:"",
        username:"",
        password:"",

    })
    const getData=()=>{    
        axios.get(url).then((res)=>{
            // console.log(res.data);
            setuser(res.data);
        });    
    }

    const addUser = ()=>{
        axios.post(url,user).then(()=>{
            console.log("User Added");
            clearForm();
            getData();
        })
    }

    const clearForm=()=>{
        setuser({
        Id:"",
        email:"",
        username:"",
        password:"",
        })
    }

    const handleEvent=(e)=>{
        let newuser = {...user};
        newuser[e.target.name]= e.target.value;
        setuser(newuser);
    }

  return (
    <div>
        <form action="">
            <label htmlFor="">Id :</label>
            <input type="number" name="Id" value={user.Id} onChange={(e)=>{handleEvent(e)}}/> <br />
            <label htmlFor="">Email :</label>
            <input type="text" name="email" value={user.email} onChange={(e)=>{handleEvent(e)}}/> <br />
            <label htmlFor="">Username :</label>
            <input type="text" name="username" value={user.username} onChange={(e)=>{handleEvent(e)}}/> <br />            
            <label htmlFor="">Password :</label>
            <input type="text" name="password" value={user.password} onChange={(e)=>{handleEvent(e)}}/> <br />
            <button type="button" onClick={addUser}>Add User</button>
        </form>
    </div>
  )
}
