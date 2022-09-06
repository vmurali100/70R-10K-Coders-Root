import React,{useState} from 'react'

export const CreateUser = () => {
    const [user, setuser] = useState({//created an (user)object
        "name":"","username":"","email":"","password":"","message":"","confirmpassword":"",
    })
    const [users, setusers] = useState([]);//created an (users) empty array
    const [index, setindex] = useState(0)


    const handleChange=(e)=>{
        let newUser ={...user};//creating copy of an object
        newUser[e.target.name]= e.target.value;//name:will know what we are typing ex:name,email,username,password
        setuser(newUser)
    };

    const handleSend=()=>{
        console.log(user)
        let newUsers=[...users]
        newUsers.push(user)
        setusers(newUsers)//use todisplay the data one by one.
        clearForm()
    };
    const clearForm=()=>{
        setuser({"name":"","username":"","email":"","password":"","confirmpassword":"","message":""
    })
    }
    const deleteUser=(name)=>{
        let newUsers=users.filter((myUser)=>myUser.name !=name);
    setusers(newUsers)
    }
    const handleEdit=(myUser,i)=>{
        setuser(myUser);
        setindex(i)//i is saved in indexvalue

    }

    const updateUser=()=>{
        let newUsers =[...users];
        newUsers[index]=user;
        setusers(newUsers)
        clearForm()
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

           <button onClick={handleSend} type="button">SEND</button>
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


              <td><button className="btn btn-warning" onClick={()=>{handleEdit(user,i)}}>Edit</button></td>
              <td><button className="btn btn-danger" onClick={()=>{deleteUser(user.name)}}>Delete </button></td>
            </tr>
          })}
          
        </tbody>
      </table>
    </div>
  )
}
