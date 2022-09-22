import React, { useState } from 'react'

export const For = () => {

    const [user, setuser] = useState({
        id:"",
        email:"",
        username:"",
        password:"",
    });
    const [users, setusers] = useState([]);
  const [index, setindex] = useState(0);

    const handleChange = (e) => {
        var newUsers= { ...user}; 
        newUsers[e.target.name] = e.target.value
        setusers(newUsers)
    }
    
    const handleSubmit=()=>{
        console.log(user)
        let newUsers=[...user]
        newUsers.push(user)
        setusers(newUsers)
    }

    const handleEdit=(myUser,i)=>{
        setuser(myUser);
        setindex(i);

    }

    const deleteUser=(id)=>{
        let newUsers = users.filter((myUser)=>myUser.id !==id);
        setusers(newUsers)
      }
    

const {id,email,username,password}=user;
    return (
        <div>
            <form >
            <label htmlFor="id">ID</label>
                <input type="text" name="id" value={id} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={email} onChange={(e) => { handleChange(e) }} /> <br />
               
                <label htmlFor="username">user name</label>
                <input type="text" name="username" value={username} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="password">password</label>
                <input type="text" name="password" value={password} onChange={(e) => { handleChange(e) }} /> <br />
                <button onClick={handleSubmit} type="button">submit</button>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th># ID</th>
                        <th>Email</th>
                        <th>user name</th>  
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    
                {users.map((user,i)=>{
                return <tr key={i}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td><button className="btn btn-warning" onClick={()=>{handleEdit(user,i)}}>Edit</button></td>
                    <td><button className="btn btn-danger" onClick={()=>{deleteUser(user.id)}}>Delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}
