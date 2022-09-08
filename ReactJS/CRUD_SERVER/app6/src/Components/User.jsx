import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';

export const User = () => {
    const [user, setuser] = useState({username:"",password:"",emailaddress:"",dateofbirth:"",height:"",weight:""})
    const [users, setusers] = useState([])
    let url="http://localhost:3000/users/"
    useEffect(()=>{

        getDataFromServer()
    })
    const getDataFromServer=()=>{
        axios.get(url).then((response)=>{
            console.log(response)
            setusers(response.data)

        })

    }
    const handleChange=(e)=>{
        let newUser ={...user}
        newUser[e.target.name]=e.target.value
        setuser(newUser)
    }
    
    const handleAdd =()=>{
        console.log(user)
        axios.post(url,user).then(()=>{
            console.log("Added")
            clearForm()
            getDataFromServer()

        })

    }
    const handleEdit =(user)=>{

        console.log(user)
        setuser(user)

        
    }
    const updateUser =()=>{
        axios.put(url+user.id,user).then(()=>{
        console.log("Updated")
        clearForm()
        getDataFromServer()


    })
        
    }
    const deleteUser =(user)=>{
        axios.delete(url+user.id).then(()=>{


        console.log("Deleted")
        getDataFromServer()
    })


        
    }

const clearForm=()=>{
    setuser({username:"",password:"",emailaddress:"",dateofbirth:"",height:"",weight:""})
}

    const{username,dateofbirth,height,weight,emailaddress,password}= user;
    return (
      <div>
          <form >
          <label htmlFor="username">Username :</label>
             <input type="text" name="username"value={username} onChange={(e)=>{handleChange(e)}}/> <br/>
             <label htmlFor="password">Password :</label>
             <input type="text" name="password"value={password} onChange={(e)=>{handleChange(e)}}/> <br/>
             <label htmlFor="emailaddress">Email Address :</label>
             <input type="text" name="emailaddress"value={emailaddress} onChange={(e)=>{handleChange(e)}}/> <br/>
             <label htmlFor="dateofbirth">Date of Birth:</label> 
              <input type="text" name="dateofbirth" value={dateofbirth} onChange={(e)=>{handleChange(e)}} /><br/>
              <label htmlFor="height">Height :</label> 
              <input type="text" name="height" value={height} onChange={(e)=>{handleChange(e)}} /><br/>
              <label htmlFor="weight">Weight:</label> 
              <input type="text" name="weight" value={weight} onChange={(e)=>{handleChange(e)}} /><br/>
              <button type='button' onClick={handleAdd}>AddUser</button>
              <button type="button"onClick={updateUser} >Update User</button>
          </form>
          <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th >Username</th>
              <th >Email Address</th>
              <th >Password</th>
              <th >Date of Birth</th>
              <th >Height</th>
              <th >Weight</th>
              <th> Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
  
            {users.map((user,i)=>{//to display
              return <tr key={i}>
                <td>{user.username}</td>
                <td>{user.emailaddress}</td>
                <td>{user.password}</td>
                <td>{user.dateofbirth}</td>
                <td>{user.height}</td>
                <td>{user.weight}</td>
                <td><button className="btn btn-warning" onClick={()=>{handleEdit(user,i)}}>Edit</button></td>
                <td><button className="btn btn-danger" onClick={()=>{deleteUser(user)}}>Delete </button></td>
              </tr>
            })}
            
          </tbody>
        </table>
  
          </div>
    );
  };
  
    