import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export const User = () => {
    const [user, setuser] = useState({"name":"","username":"","email":"","password":"","message":"","confirmpassword":"",
})
    const [users, setusers] = useState([])
    let url ="http://localhost:3000/user/"
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
        let newUser={...user}
        newUser[e.target.name]=e.target.value
        setuser(newUser)

    }
    const handleEdit=(user)=>{
        console.log(user)
        setuser(user)

    }
   const handleadd=()=>{
      axios.post(url,user).then(()=>{
        clearForm()
      getDataFromServer()

      })
      
    }
    const updateUser=()=>{
        axios.put(url+user.id,user).then(()=>{
            clearForm()
           getDataFromServer()
        })   
    }
    const deleteUser=(user)=>{
        axios.delete(url+user.id).then(()=>{
            getDataFromServer()
        }) 
    }
    const clearForm=()=>{
        setuser({"name":"","username":"","email":"","password":"","message":"","confirmpassword":"",
    })
    }


    const{name,username,email,password,confirmpassword,message}= user;
    return (
      <div>
          <h2>Bootstrap 4 Form Validation  Demo</h2>
         <form>
             <label htmlFor=''>Name :</label>
             <input type="text" name="name" value={name} onChange={(e)=>{handleChange(e)}} /> <br/>
             <label htmlFor="">Username :</label>
             <input type="text" name="username"value={username} onChange={(e)=>{handleChange(e)}}/> <br/>
             <label htmlFor="">Email :</label>
             <input type="text" name="email"value={email} onChange={(e)=>{handleChange(e)}}/> <br/>
             <label htmlFor="">Password :</label>
             <input type="text" name="password"value={password} onChange={(e)=>{handleChange(e)}}/> <br/>
             <label htmlFor=" "> Confirm Password :</label>
             <input type="text" name="confirmpassword"value={confirmpassword} onChange={(e)=>{handleChange(e)}}/> <br/>
             <label htmlFor="">Message :</label>
             <input type="text" name="message"value={message} onChange={(e)=>{handleChange(e)}}/> <br/>
  
             <button onClick={handleadd} type="button">ADD</button>
              <button type="button"onClick={updateUser} >Update User</button>
  
         </form>
         <table className="table table-success table-striped-columns">
          <thead>
            <tr>
              <th >Name</th>
              <th >Username</th>
              <th >Email</th>
              <th >Password</th>
              <th >Confirm Password</th>
              <th >Message</th>
              <th> Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
  
            {users.map((user,i)=>{//to display
              return <tr key={i}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.confirmpassword}</td>
                <td>{user.message}</td>
  
  
                <td><button className="btn btn-warning" onClick={()=>{handleEdit(user)}}>Edit</button></td>
                <td><button className="btn btn-danger" onClick={()=>{deleteUser(user)}}>Delete </button></td>
              </tr>
            })}
            
          </tbody>
        </table>
      </div>
    )
  }
  