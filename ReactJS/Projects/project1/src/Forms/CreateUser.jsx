import React,{useState} from "react";

export const CreateUser = () => {
  const [user, setuser] = useState({
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country:""
  });

  const {street,city,state,zipcode,country} = user //
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
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country:""
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
      <h2>Address</h2>
        <label htmlFor="street">street : </label>
        <input type="text" name="street" value={street} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="city">city : </label>
        <input type="text" name="city" value={city} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="state">state : </label>
        <input type="text" name="state"  value={state} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="zipcode">zipcode : </label>
        <input type="text" name="zipcode"  value={zipcode} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="country">country : </label>
        <input type="text" name="country"  value={country} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <button type="button" onClick={handleSubmitt} >Add User</button> 
        <button type="button" onClick={updateUser}>Update User</button>
    </form>
    <table className="table">
        <thead>
          <tr>
            <th >street</th>
            <th >city</th>
            <th >state</th>
            <th >zipcode</th>
            <th>country</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,i)=>{
            return <tr key={i}>
                <td>{user.street}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.zipcode}</td>
                <td>{user.country}</td>
                <td><button className="btn btn-warning" onClick={()=>{handleEdit(user,i)}}>Edit</button></td>
                <td><button className="btn btn-danger" onClick={()=>{handleDelete(user.id)}}>Delete</button></td>
            </tr>
          })}
        </tbody>
      </table>
  </div>;
};
