import React,{useState} from "react";

export const CreateUser = () => {
  const [user, setuser] = useState({
    id: "",
    email: "",
    username: "",
    password: "",
    height:"",
    weight:""
  });

  const {id,email,username,password,height,weight} = user //
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
    id: "",
    email: "",
    username: "",
    password: "",
    height:"",
    weight:""
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
        <label htmlFor="id">ID : </label>
        <input type="text" name="id" value={id} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="email">Email : </label>
        <input type="text" name="email" value={email} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="username">Username : </label>
        <input type="text" name="username"  value={username} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="text" name="password"  value={password} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="height">height : </label>
        <input type="text" name="height"  value={height} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="weight">weight : </label>
        <input type="text" name="weight"  value={weight} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <button type="button" onClick={handleSubmitt} >Add User</button> 
        <button type="button" onClick={updateUser}>Update User</button>
    </form>
    <table className="table">
        <thead>
          <tr>
            <th >#Id</th>
            <th >Email</th>
            <th >Username</th>
            <th >Password</th>
            <th>height</th>
            <th>weight</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,i)=>{
            return <tr key={i}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.height}</td>
                <td>{user.weight}</td>
                <td><button className="btn btn-warning" onClick={()=>{handleEdit(user,i)}}>Edit</button></td>
                <td><button className="btn btn-danger" onClick={()=>{handleDelete(user.id)}}>Delete</button></td>
            </tr>
          })}
        </tbody>
      </table>
  </div>;
};
