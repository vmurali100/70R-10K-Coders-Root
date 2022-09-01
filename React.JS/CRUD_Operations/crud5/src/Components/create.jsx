import React from "react";
import { useState } from "react";

export const Createuser = () => {

    const [user, setuser] = useState({
        id: "",
        name: "",
        userName: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",

    })

    const [userArr, setuserArr] = useState([])

    const { id, name, userName, email, password, confirmpassword, message } = user;

    const [index, setindex] = useState(0);

    const handleChange = (e) => {
        let newuser = { ...user };
        newuser[e.target.name] = e.target.value;
        setuser(newuser);
    }

    const addUser = () => {
        let newuserArr = [...userArr];
        newuserArr.push(user);
        setuserArr(newuserArr);
        clearform();
    }

    const deleteUser = (id) => {
        let newuserArr = userArr.filter((b) => b.id !== id);
        setuserArr(newuserArr);
    }

    const editUser = (c, i) => {
        setuser(c);
        setindex(i);
    }

    const updateUser = () => {
        let newuserArr = [...userArr];
        newuserArr[index] = user;
        setuserArr(newuserArr);
        clearform();
    }

    const clearform = () => {
        setuser({
            id: "",
            name: "",
            userName: "",
            email: "",
            password: "",
            confirmpassword: "",
            message: "",
        })
    }

    return (
        <div>
            <form>
                <label htmlFor="">ID:</label>
                <input type="text" name="id" value={id} onChange={(e) => handleChange(e)} /> <br />

                <label htmlFor="">Name:</label>
                <input type="text" name="name" value={name} onChange={(e) => handleChange(e)} /> <br />

                <label htmlFor="">Username:</label>
                <input type="text" name="userName" value={userName} onChange={(e) => handleChange(e)} /> <br />

                
                <label htmlFor="">Email:</label>
                <input type="text" name="email" value={email} onChange={(e) => handleChange(e)} /> <br />

                <label htmlFor="">Password:</label>
                <input type="text" name="password" value={password} onChange={(e) => handleChange(e)} /> <br />

                <label htmlFor="">Confimr Password:</label>
                <input type="text" name="confirmpassword" value={confirmpassword} onChange={(e) => handleChange(e)} /> <br />

                <label htmlFor="">Message:</label>
                <textarea type="text" name="message" value={message} onChange={(e) => handleChange(e)} ></textarea> <br />

                <button type="button" onClick={addUser}>Add</button>
                <button type="button" onClick={updateUser}>Update</button>
            </form>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Confirm Password</th>
                        <th>Message</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userArr.map((a, i) => {
                        return <tr key={i}>
                            <td>{a.id}</td>
                            <td>{a.name}</td>
                            <td>{a.userName}</td>
                            <td>{a.email}</td>
                            <td>{a.password}</td>
                            <td>{a.confirmpassword}</td>
                            <td>{a.message}</td>
                            <td><button type="button" className="btn btn-warning" onClick={() => { editUser(a, i) }}>Edit</button></td>
                            <td><button type="button" className="btn btn-danger" onClick={() => { deleteUser(a.id) }}>Delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}