import React, { useState } from 'react'

export const CreateUser = () => {

    const [user, setuser] = useState({
        id: "",
        email: "",
        username: "",
        password: "",
    })    
    const [users, setusers] = useState([]);
    const [index, setindex] = useState(0);
    const { id, email, username, password } = user;

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
            id: "",
            email: "",
            username: "",
            password: "",
        })
    }
    const handleEdit=(user,i)=>{
        setuser(user);
        setindex(i);
    }
    const deleteUser = (id) => {
        let newUsers = users.filter((user) => user.id !== id);
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
                <label htmlFor="">ID : </label>
                <input type="text" name="id" value={id} onChange={(e) => { handleChange(e) }} /> <br />
                <label htmlFor="">Email : </label>
                <input type="text" name="email" value={email} onChange={(e) => { handleChange(e) }} /> <br />
                <label htmlFor="">UserName : </label>
                <input type="text" name="username" value={username} onChange={(e) => { handleChange(e) }} /> <br />
                <label htmlFor="">Password : </label>
                <input type="text" name="password" value={password} onChange={(e) => { handleChange(e) }} /> <br /> 
                <button type="button" className='btn btn-warning' onClick={handleSubmit}>Add User</button>
                <button type="button" onClick={handleUpdate}>Update User</button>
            </form>
            <br /> <br />
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th >ID</th>
                            <th >Username</th>
                            <th >Email</th>
                            <th >Password</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => {
                            return <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td><button className='btn btn-warning'onClick={()=>{handleEdit(user,i)}} >Edit</button></td>
                                <td><button className='btn btn-danger' onClick={() => { deleteUser(user.id) }}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
