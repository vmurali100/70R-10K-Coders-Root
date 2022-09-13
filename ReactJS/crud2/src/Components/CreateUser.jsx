import React, { useState } from 'react'

export const CreateUser = () => {

    const [user, setuser] = useState({
        Name: "",
        username: "",
        password: "",
        Message: "",
    })
    const { Name,  username, password, Message } = user;
    const [users, setusers] = useState([]);
    const [index, setindex] = useState(0)

    const handleChange = (e) => {
        let newuser = { ...user };
        newuser[e.target.name] = e.target.value;
        setuser(newuser);

    }
    const handleSubmit = () => {
        console.log(user);
        let newusers = [...users];
        newusers.push(user);
        console.log(users);
        setusers(newusers);
        clearform();
    }
    const clearform = () => {
        setuser({
          Name: "",
          username: "",
          password: "",
          Message: "",
      })
    }
    const handleEdit=(user,i)=>{
        setuser(user);
        setindex(i);
    }
    const deleteUser = (pass) => {
        let newUsers = users.filter((user) => user.password !== pass);
        setusers(newUsers);
    }
    const handleUpdate=()=>{
        let newusers=[...users];
        newusers[index]=user;
        setusers(newusers);
        clearform();
    }
    return (
        <div>
            <form action="">
                <label htmlFor="">Name </label><br />
                <input type="text" name="Name" value={Name} onChange={(e) => { handleChange(e) }} /> <br />
                <label htmlFor="">username </label><br />
                <input type="text" name="username" value={username} onChange={(e) => { handleChange(e) }} /> <br />
                <label htmlFor="">password </label><br />
                <input type="text" name="password" value={password} onChange={(e) => { handleChange(e) }} /> <br />
                <label htmlFor="">Message </label><br />
                <input type="text" name="Message" value={Message} onChange={(e) => { handleChange(e) }} /> <br /> 
                <button type="button" className='btn btn-warning' onClick={handleSubmit}>Add User</button>
                <button type="button" onClick={handleUpdate}>Update User</button>
            </form>
            <br /> <br />
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th >Name</th>
                            <th >Username</th>
                            <th >Password</th>
                            <th>Mssage</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => {
                            return <tr key={i}>
                                <td>{user.Name}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.Message}</td>
                                <td><button className='btn btn-warning'onClick={()=>{handleEdit(user,i)}} >Edit</button></td>
                                <td><button className='btn btn-danger' onClick={() => { deleteUser(user.password) }}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
