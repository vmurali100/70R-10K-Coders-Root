import React,{useState} from "react";

export const CreateUser = () => {
  const [user, setuser] = useState({
    university: "",
    institute: "",
    branch: "",
    degree: "",
    experience:"",
    yourwebsiteorblog:""
  });

  const {university,institute,branch,degree,experience,yourwebsiteorblog} = user //
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
      university: "",
    institute: "",
    branch: "",
    degree: "",
    experience:"",
    yourwebsiteorblog:""
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
        <label htmlFor="university">university : </label>
        <input type="text" name="university" value={university} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="institute">institute : </label>
        <input type="text" name="institute" value={institute} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="branch">branch : </label>
        <input type="text" name="branch"  value={branch} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="degree">degree : </label>
        <input type="text" name="degree"  value={degree} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="experience">experience : </label>
        <input type="text" name="experience"  value={experience} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <label htmlFor="yourwebsiteorblog">yourwebsiteorblog : </label>
        <input type="text" name="yourwebsiteorblog"  value={yourwebsiteorblog} onChange={(e)=>{handlechange(e)}}/>
        <br />
        <br />
        <button type="button" onClick={handleSubmitt} >Add User</button> 
        <button type="button" onClick={updateUser}>Update User</button>
    </form>
    <table className="table">
        <thead>
          <tr>
            <th >#university</th>
            <th >institute</th>
            <th >branch</th>
            <th >degree</th>
            <th>experience</th>
            <th>yourwebsiteorblog</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,i)=>{
            return <tr key={i}>
                <td>{user.university}</td>
                <td>{user.institute}</td>
                <td>{user.branch}</td>
                <td>{user.degree}</td>
                <td>{user.experience}</td>
                <td>{user.yourwebsiteorblog}</td>
                <td><button className="btn btn-warning" onClick={()=>{handleEdit(user,i)}}>Edit</button></td>
                <td><button className="btn btn-danger" onClick={()=>{handleDelete(user.id)}}>Delete</button></td>
            </tr>
          })}
        </tbody>
      </table>
  </div>;
};
