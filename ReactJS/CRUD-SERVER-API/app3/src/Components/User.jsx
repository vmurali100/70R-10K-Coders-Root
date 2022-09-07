import React,{useEffect, useState} from 'react'
import axios from 'axios'

export const User = () => {
  const [user, setuser] = useState({
      street:"",
      city:"",
      state:"",
      zipcode:"",
      country:""
  })
    
    const [users,setusers] = useState([])

    useEffect(()=>{
        getDataFromServer()
    },[])

    let url="http://localhost:3000/lists/"

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

    const addUser =()=>{
        axios.post(url,user).then(()=>{
        console.log("user added Successfully")
        clearForm();
        getDataFromServer()
        })
    }
    const clearForm=()=>{
        setuser({
          street:"",
          city:"",
          state:"",
          zipcode:"",
          country:""
        })
    }
    const handleDelete=(tem)=>{
        axios.delete(url+tem.id).then(()=>{
            console.log("User deleted Successfully");
            getDataFromServer();
        })
    }
    const edituser=(tem)=>{
        setuser(tem)
    }
    const updateUser=()=>{
        axios.put(url+user.id,user).then(()=>{
            console.log("updated");
            getDataFromServer();
            clearForm()
        })
    }
    return (
    <div>
        <form>
        <label htmlFor='street'>Street: </label>
        <input type="text" name='street' value={user.street} onChange={((e)=>{handleChange(e)})}/><br/>
        <label htmlFor='city'>City: </label>
        <input type="text" name='city' value={user.city} onChange={((e)=>{handleChange(e)})}/><br/>
        <label htmlFor='state'>State: </label>
        <input type="text" name='state' value={user.state} onChange={((e)=>{handleChange(e)})}/><br/>
        <label htmlFor='zipcode'>Zip Code: </label>
        <input type="text" name='zipcode' value={user.zipcode} onChange={((e)=>{handleChange(e)})}/><br/>
        <label htmlFor='country'>Country: </label>
        <input type="text" name='country' value={user.country} onChange={((e)=>{handleChange(e)})}/><br/>
        <button type ="button" onClick={addUser}>Add User</button>
        <button type ="button" onClick={updateUser}>Update User</button>

        <hr />
        <table border={2}>
            <thead>
                <tr>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zipcode</th>
                    <th>Country</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users.map((tem,i)=>{
                    return <tr key={i}>
                        <td>{tem.street}</td>
                        <td>{tem.city}</td>
                        <td>{tem.state}</td>
                        <td>{tem.zipcode}</td>
                        <td>{tem.country}</td>
                        <td>
                            <button type="button" onClick={()=>{edituser(tem)}}>Edit</button>
                        </td>
                        <td><button type="button" onClick={()=>{handleDelete(tem)}}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
        </form>
    </div>
  )
}

