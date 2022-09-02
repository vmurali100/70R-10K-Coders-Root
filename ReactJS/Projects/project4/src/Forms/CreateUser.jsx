import React,{useState} from "react";

export const CreateUser = () => {
  const [user, setuser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword:"",
    message:""
  });

  const {name,username,email,password,confirmpassword,message} = user //
  const [users, setusers] = useState([])

  const handlechange=(e)=>{
    let newUser = {...user}
    newUser[e.target.name] = e.target.value;
    setuser(newUser)
  }
  const handleSubmitt=()=>{
    console.log(user);
    let newUsers = [...users]
    newUsers.push(user)
    setusers(newUsers)
    clearForm()
  }

  const clearForm=()=>{      //for clearing th form
    setuser({
      name: "",
      username: "",
      email: "",
    password: "",
    confirmpassword:"",
    message:""
    })
  }
  const handleDelete=(id)=>{
    let newUsers = users.filter((myUser)=>myUser.id!==id)
        setusers(newUsers)
  }

  const handleEdit=(myUser,i)=>{
    setuser(myUser)
    setindex(i)
  }


  const [index, setindex] = useState(0) // when we update we have an index, to store the particular array r object index

  const updateUser=()=>{
    let newUsers = [...users]
    newUsers[index] =user
    setusers(newUsers)
    clearForm()
  }
  
  return <div>
    <form >
        <label htmlFor="name">name : </label>
        <input type="text" name="name" value={name} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="username">username : </label>
        <input type="text" name="username" value={username} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="email">email : </label>
        <input type="text" name="email"  value={email} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="text" name="password"  value={password} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="confirmpassword">confirmpassword : </label>
        <input type="text" name="confirmpassword"  value={confirmpassword} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="message">message : </label>
        <input type="text" name="message"  value={message} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <button type="button" onClick={handleSubmitt} >Add User</button> 
        <button type="button" onClick={updateUser}>Update User</button>
    </form>
    <table className="table">
        <thead>
          <tr>
            <th >#name</th>
            <th >username</th>
            <th >email</th>
            <th >Password</th>
            <th>confirmpassword</th>
            <th>message</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,i)=>{
            return <tr key={i}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.confirmpassword}</td>
                <td>{user.message}</td>
                <td><button className="btn btn-warning" onClick={()=>{handleEdit(user,i)}}>Edit</button></td>
                <td><button className="btn btn-danger" onClick={()=>{handleDelete(user.id)}}>Delete</button></td>
            </tr>
          })}
        </tbody>
      </table>
  </div>;
};
