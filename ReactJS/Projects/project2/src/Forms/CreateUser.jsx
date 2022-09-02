import React,{useState} from "react";

export const CreateUser = () => {
  const [user, setuser] = useState({
    fname: "",
    lname: "",
    dateofbirth: "",
    emailid: "",
    mobileNumber:""
  });

  const {fname,lname,dateofbirth,emailid,mobileNumber} = user //
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
    fname: "",
    lname: "",
    dateofbirth: "",
    emailid: "",
    mobileNumber:""
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
        <label htmlFor="fname">fname : </label>
        <input type="text" name="fname" value={fname} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="lname">lname : </label>
        <input type="text" name="lname" value={lname} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="dateofbirth">dateofbirth : </label>
        <input type="text" name="dateofbirth"  value={dateofbirth} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="emailid">emailid : </label>
        <input type="text" name="emailid"  value={emailid} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="mobileNumber">mobileNumber : </label>
        <input type="text" name="mobileNumber"  value={mobileNumber} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <button type="button" onClick={handleSubmitt} >Add User</button> 
        <button type="button" onClick={updateUser}>Update User</button>
    </form>
    <table className="table">
        <thead>
          <tr>
            <th >fname</th>
            <th >lname</th>
            <th >dateofbirth</th>
            <th >emailid</th>
            <th>mobileNumber</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,i)=>{
            return <tr key={i}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.dateofbirth}</td>
                <td>{user.emailid}</td>
                <td>{user.mobileNumber}</td>
                <td><button className="btn btn-warning" onClick={()=>{handleEdit(user,i)}}>Edit</button></td>
                <td><button className="btn btn-danger" onClick={()=>{handleDelete(user.id)}}>Delete</button></td>
            </tr>
          })}
        </tbody>
      </table>
  </div>;
};
